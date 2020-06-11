import React, { useEffect, useState } from 'react'
import UseStyles from './Styles';
import { Container, Paper } from '@material-ui/core';
import Radio from './Radio';
import CheckBox from './CheckBox';
import DOB from './DOB';
import Search from './Searchbar';
import axios from 'axios';

export default function Main() {
    var date = new Date();

    const classes = UseStyles();
    const [data, setNext] = useState([]);
    const [ques, setQue] = useState([1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1023, 1024, 1025, 1026, 1027, 1028])
    const [symtraveled, setSym] = useState([])
    const [travel, setTravel] = useState(false)
    const [disease, setDisease] = useState([])
    const [time, setTime] = useState(date.getHours() + ":" + date.getMinutes())
    const [top, setTop] = useState(200);

    useEffect(() => {
        axios.get(`http://localhost:8000/user/question/access`)
            .then(res => {
                axios.get(`http://localhost:8000/question/update/${res.data[0]['Sym_Id']}`)
                    .then(result => {
                        setNext(oldArray => [...oldArray, result.data])
                    })
            })
    }, [])

    const response_checker = (e, values, data_view) => {
        var times = new Date()
        data.filter(function (val) {
            if (val.Sym_Id === e) {
                val['Disabled'] = true
                val['Option1'] = values
                val['Option2'] = null
                val['Option3'] = null
                val['time'] = times.getHours() + ":" + times.getMinutes()
                return val;
            }
        })
        var solution = '';
        if (data_view !== undefined) { solution = data_view['Sym_Id'] }
        else { solution = "empty" }
        axios.post(`http://localhost:8000/user/question/access`, {
            Ids: 5051,
            Name: "Empty",
            Sym_Id: solution,
            Disease_Id: "Empty",
            Sym_Type: "Empty"
        })
            .then(res => {
                // console.log(res.data)
            })
        if (parseInt(e) + 1 === 2005) { setTravel(true) }
        if (travel) {
            var value = ques[Math.floor(Math.random() * ques.length)]
            setSym(oldArray => [...oldArray, value])
            var dummy = ques.filter(function (e) {
                return e !== value;
            })
            setQue([])
            setQue(dummy)
            if (dummy.length > 15) {
                setSym(oldArray => [...oldArray, value])
                axios.get(`http://localhost:8000/question/update/${value}`)
                    .then(result => {
                        setNext(oldArray => [...oldArray, result.data])
                        setTime(times.getHours() + ":" + times.getMinutes())
                        window.scrollTo({
                            top: top,
                            behavior: 'smooth'
                        });
                        setTop(top * 2)
                    })
            }
            else {
                console.log("symptom travelled", symtraveled)
                var a = symtraveled
                axios.get('http://localhost:8000/access/sym')
                    .then(res => {
                        var arr = []
                        for (let i = 0; i < a.length; i++) {
                            for (let j = 0; j < res.data.length; j++) {
                                if (a[i] === parseInt(res.data[j]['Sym_Id'])) {
                                    if (arr.includes(res.data[j]['Disease_Id']) === false) {
                                        arr.push(res.data[j]['Disease_Id'])
                                    }
                                }
                            }
                        }
                        console.log("array", arr)
                        setDisease(old => [...old, arr])
                        setNext(oldArray => [...oldArray, { EleId: "05" }])
                        setTime(times.getHours() + ":" + times.getMinutes())

                        window.scrollTo({
                            top: top,
                            behavior: 'smooth'
                        });
                        setTop(top * 2)
                    })
            }
        }

        else {
            axios.get(`http://localhost:8000/question/update/${parseInt(e) + 1}`)
                .then(result => {
                    setNext(oldArray => [...oldArray, result.data])
                    setTime(times.getHours() + ":" + times.getMinutes())
                    window.scrollTo({
                        top: top,
                        behavior: 'smooth'
                    });
                    setTop(top * 2)
                })
        }
    }

    return (
        <div>
            <Container className={classes.layout}>
                <Paper className={classes.Body}>
                    <p className={classes.intro_design}>You're in the right place. Let's get you feeling better.</p>
                    {data.map((i, j) => <Desider key={j} Disabled={i.Disabled} Id={i.Sym_Id} EleId={i.EleId} Question={i.Question} data_view={i} time={time} top={top}
                        Option={[i.Option1, i.Option2, i.Option3].filter(function (ex) { return ex != null })} access_Method={(e, val, d) => response_checker(e, val, d)} data={disease} />)}
                </Paper>
            </Container>
        </div>
    )
}

function Desider(props) {
    if (props.EleId === "01") {
        return <Radio Id={props.Id} Question={props.Question} Option={props.Option} access_Method={props.access_Method} Disabled={props.Disabled} data_view={props.data_view} time={props.time} />;
    }
    else if (props.EleId === "02") {
        return <CheckBox Id={props.Id} Question={props.Question} Option={props.Option} access_Method={props.access_Method} Disabled={props.Disabled} data_view={props.data_view} time={props.time} />
    }
    else if (props.EleId === "03") {
        return <DOB Id={props.Id} Question={props.Question} Option={props.Option} access_Method={props.access_Method} Disabled={props.Disabled} data_view={props.data_view} time={props.time} />
    }
    else if (props.EleId === "04") {
        return <Search Id={props.Id} Question={props.Question} access_Method={props.access_Method} Disabled={props.Disabled} data_view={props.data_view} time={props.time} />
    }
    else {
        return <Disease_Viewer data={props.data} top={props.top} />;
    }
}

function Disease_Viewer(props) {
    const classes = UseStyles();

    useEffect(() => {
        props.data[0].forEach(element => {
            console.log("each--->>>", element)
            axios.get(`http://localhost:8000/access/user/${element}`)
                .then(res => {
                    res.data.forEach(ele => {
                        setData(old => [...old, ele.Name])
                        window.scrollTo({
                            top: props.top + 200,
                            behavior: 'smooth'
                        });
                    });
                })
        });

    }, [props.data])

    const [datas, setData] = useState([])
    return (
        <div className={classes.Header_Design}>
            <p className={classes.title_style}>Diagnosed Disease</p>
            {datas.slice(0, 3).map((k, m) => <p key={m} className={classes.para_style}>{m + 1}&nbsp;&nbsp;{k}</p>)}
        </div>
    )
}
