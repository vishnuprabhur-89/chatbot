import React, { useState, useEffect } from 'react'
import UseStyles from './Styles';
import { Button, TextField, Tooltip } from '@material-ui/core';
import axios from 'axios';

function SearchModule(props) {
    const classes = UseStyles();
    const [search, setSearch] = useState([]);
    const [filter, setFilter] = useState([]);
    const [sym, setSym] = useState('');
    const [syslist, setsymlist] = useState([]);
    const [removed, setRemoved] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        setSearch(props.data);
    }, [props.data]);

    const input_validtator = (e) => {
        var split_string = e.target.value.split(/[^a-zA-Z]/g)
        setSym(split_string[0])
        setSearch(OldArray => [...OldArray, props.data])
        setFilter([])
        if (split_string[0].length > 0) {
            for (let i = 0; i < search.length; i++) {
                let value = String(search[i]['Name'])
                if (value.slice(0, split_string[0].length) === split_string[0]) {
                    setFilter(OldArray => [...OldArray, search[i]])
                    window.scrollTo({
                        top: 1000,
                        behavior: 'smooth'
                    });
                }
            }
        }
        else {
            setFilter([])
        }
    }
    const sym_selector = (symptom) => {
        setsymlist(OldArray => [...OldArray, symptom.Name])
        setFilter([])
        setSym(symptom.Name)
        setStatus(true)
        setRemoved(OldArray => [...OldArray, symptom])
        for (var i = 0; i < search.length; i++)
            if (search[i].Name === symptom.Name) {
                search.splice(i, 1);
                break;
            }
    }

    const remove_symptom = (sym) => {
        console.log(sym)
        var dummy = syslist.filter(function (e) {
            return e !== sym;
        })
        console.log("dummy--->", dummy)
        // var filter_value = syslist.filter(function(value){return value!== sym})
        setsymlist([])
        setsymlist(dummy)
        setSym('')
        if (dummy.length === 0) { setStatus(false) }
        for (let i = 0; i < removed.length; i++)
            if (removed[i].Name === sym) {
                setSearch(OldArray => [...OldArray, removed[i]])
                break;
            }
    }
    const response_check = () => {
        props.access_Method(props.Id, sym, props.data_view);
    }
    return (
        <div className={classes.radio_header}>
            <img alt="logo" src={require('../images/logo1.png')} className={classes.logo_design1}></img>
            <p className={classes.timer_design}>{props.time}</p>
            <div className={classes.Search_Heading}>
                <p>Alright. Let's figure this out together. <br />What symptom is bothering him the most?</p>
                {syslist.map((i, j) =>
                    <Tooltip key={j} title="Delete">
                        <Button disabled={props.Disabled} variant="contained" size="small" color="secondary" className={classes.Symptom_Lister} onClick={() => remove_symptom(i)}>{i}</Button>
                    </Tooltip>
                )}
            </div>
            <div className={classes.Search_bar}>
                <TextField
                    label="Search your symptom"
                    variant="outlined"
                    margin="dense"
                    className={classes.search_input}
                    onChange={input_validtator}
                    value={sym}
                    disabled={props.Disabled}
                />
                {status ? <Button disabled={props.Disabled} className={classes.Submit_Design} onClick={response_check}>I'm done adding symptoms</Button> : <Button className={classes.Submit_Design}>Add Symptom</Button>}
            </div>
            <div className={classes.Search_bar}>
                {filter.slice(0, 5).map((i, j) => <p key={j} className={classes.split} onClick={() => sym_selector(i)}>{i.Name}</p>)}
            </div>
        </div>
    )
}


export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }
    componentDidMount() {
        axios.get(`http://localhost:8000/access/sym`)
            .then(res => {
                this.setState({ data: this.state.data.concat(res.data) })
            })
    }
    render() {
        return (
            <div>
                <SearchModule data={this.state.data} Disabled={this.props.Disabled} Id={this.props.Id} access_Method={this.props.access_Method} />
            </div>
        )
    }
}

