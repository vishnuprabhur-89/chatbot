import React from 'react';
import UseStyles from './Styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Footer from './Footer';

export default function Home() {
    const classes = UseStyles();

    return (
        <div className={classes.root}>
            <Grid container className={classes.poster_head}>
                <Grid item xs={12} sm={4}>
                    <img alt="poster" src={require("../images/doctor1.png")} className={classes.poster_design}></img>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <h5 className={classes.headline}>POSITKA Health Assistant</h5>
                    <h6 className={classes.intro}>Looking After You</h6>
                    <h6 className={classes.intro}>As the world stays at home, self-care has never been more important. Download our step-by-step guide to keeping yourself safe and well.</h6>
                    <Button className={classes.button_design1} onClick={() => window.location.replace("http://localhost:3000/symptom/checker")}>Symptom Checker</Button>
                    <h6 className={classes.about}>This tool is not a substitute for professional medical advice, <br />diagnosis, or treatment. If you are experiencing a life-threatening <br />emergency that requires immediate attention <br />please call 911 or the number for your local emergency service.</h6>
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}
