import React from 'react'
import UseStyles from './Styles';
import { Button } from '@material-ui/core';

export default function Radio(props) {
    const classes = UseStyles();
    const send_response = (val) => {
        props.access_Method(props.Id, val, props.data_view);
    }
    return (
        <div className={classes.radio_header}>
            <img alt="logo" src={require('../images/logo1.png')} className={classes.logo_design1}></img>
            <p className={classes.timer_design}>{props.time}</p>
            <div className={classes.Question}>
                <p>{props.Question}</p>
            </div>
            <div className={classes.Option}>
                {props.Option.map((i, j) => <Button disabled={props.Disabled} key={j} className={classes.Option_Design} onClick={() => send_response(i)}>{i}</Button>)}
            </div>
        </div>
    )
}
