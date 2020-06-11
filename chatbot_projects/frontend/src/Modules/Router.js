import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Main from './Main';
import UseStyles from './Styles';
import axios from 'axios';

export default function RouterModule() {
    const classes = UseStyles();

    useEffect(() => {
        axios.delete(`http://localhost:8000/delete/user/${5051}`)
            .then(result => {
                console.log(result.data)
            })
    }, [])
    return (
        <Router className={classes.root}>
            <AppBar position="sticky" className={classes.Main_Style}>
                <Toolbar className={classes.toolbar_design}>
                    <img alt="logo" src={require('../images/logo1.png')} className={classes.logo_design} onClick={() => window.location.replace("http://localhost:3000/")} />
                    <Typography variant="h6" className={classes.title} onClick={() => window.location.replace("http://localhost:3000/")}>
                        POSITKA
                    </Typography>
                    <Button variant="contained" className={classes.button_design} onClick={() => window.location.replace("http://localhost:3000/symptom/checker")}>Symptom Checker</Button>
                </Toolbar>
            </AppBar>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/symptom/checker" component={Main}></Route>
            </Switch>
        </Router>
    );
}
