import React, { useState } from 'react'
import UseStyles from './Styles';
import { Button, TextField } from '@material-ui/core';

export default function DOB(props) {
    const classes = UseStyles();
    const [age, setAge] = useState('');

    const send_response = () => {
        if (age.length < 3) {
            props.access_Method(props.Id, age, props.data_view);
        }
    }
    const age_validator = (e) => {
        if (e.target.value.length < 3) {
            var split_string = e.target.value.split(/[^0-9]/g)
            setAge(split_string[0])
        }
    }
    return (
        <div className={classes.radio_header}>
            <img alt="logo" src={require('../images/logo1.png')} className={classes.logo_design1}></img>
            <p className={classes.timer_design}>{props.time}</p>
            <div className={classes.Question}>
                <p>{props.Question}</p>
            </div>
            <div className={classes.Option}>
                <TextField
                    label="Your Age"
                    variant="outlined"
                    margin="dense"
                    value={age}
                    className={classes.DOB}
                    onChange={age_validator}
                    disabled={props.Disabled}
                />&nbsp;&nbsp;
                <Button className={classes.Submit_Design} onClick={() => send_response()} disabled={props.Disabled}>Submit</Button>
            </div>
        </div>
    )
}