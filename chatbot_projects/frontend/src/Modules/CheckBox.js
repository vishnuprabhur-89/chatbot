import React from 'react'
import UseStyles from './Styles';
import { Button } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckBox() {
    const classes = UseStyles();
    return (
        <div className={classes.radio_header}>
            <img alt="logo" src={require('../images/logo1.png')} className={classes.logo_design1}></img>
            <p className={classes.timer_design}>12:30 PM</p>
            <div className={classes.Question}>
                <p>Are you answering yourself or some one else?</p>
            </div>
            <div className={classes.Option}>
                {["Me", "Some One Else"].map((i, j) =>
                    <FormControlLabel
                        control={
                            <Checkbox
                                // checked={state.checkedB}
                                // onChange={handleChange}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label={i}
                    />
                )}<br />
                <Button className={classes.Option_Design}>Submit</Button>
            </div>
        </div>
    )
}
