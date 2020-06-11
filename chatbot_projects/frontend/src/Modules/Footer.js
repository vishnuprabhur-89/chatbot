import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import UseStyles from './Styles';

export default function CenteredGrid() {
    const classes = UseStyles();
    const matches = useMediaQuery('(min-width:750px)');
    const alignItems = useMediaQuery('(max-width:500px)');

    return (
        <Router className={classes.root}>
            <Grid container>
                {matches ?
                    <>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="flex-start" xs={12} className={classes.Lots}>
                            <Grid className={classes.Lot1} item xs={4}>
                                <Typography className={classes.Title}>India Address</Typography>
                                <Link className={classes.LinkTitle}>PFSI Solutions Pvt. Ltd.</Link><br />
                                <Link className={classes.LinkTitle}>102 Eden Park, 20 Vittal Mallya Road</Link><br />
                                <Link className={classes.LinkTitle}>Bangalore 560001, Karnataka, India</Link><br />
                                <Link className={classes.LinkTitle}>PH - +91-89-3962-5405</Link><br />
                            </Grid>
                            <Grid className={classes.Lot1} item xs={4}>
                                <Typography className={classes.Title}>Singapore Address</Typography>
                                <Link className={classes.LinkTitle}>Positka FSI Pte Ltd</Link><br />
                                <Link className={classes.LinkTitle}>10 Anson Road, International Plaza</Link><br />
                                <Link className={classes.LinkTitle}>Singapore 079903.</Link><br />
                                <Link className={classes.LinkTitle}>PH - +65-3163-3225</Link><br />
                            </Grid>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid
                            container
                            direction="row"
                            justify={alignItems ? "center" : "center"}
                            alignItems="flex-start" xs={12} className={classes.Lots}>
                            <Grid className={classes.Lot1} item xs={4}>
                                <Typography style={{ fontSize: "3.5vmin" }}>India Address</Typography>
                                <Link className={classes.LinkTitle}>PFSI Solutions Pvt. Ltd.</Link><br />
                                <Link className={classes.LinkTitle}>102 Eden Park, 20 Vittal Mallya Road</Link><br />
                                <Link className={classes.LinkTitle}>Bangalore 560001, Karnataka, India</Link><br />
                                <Link className={classes.LinkTitle}>PH - +91-89-3962-5405</Link><br />
                            </Grid>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Grid className={classes.Lot1} item xs={4}>
                                <Typography style={{ fontSize: "3.5vmin" }}>Singapore Address</Typography>
                                <Link className={classes.LinkTitle}>Positka FSI Pte Ltd</Link><br />
                                <Link className={classes.LinkTitle}>10 Anson Road, International Plaza</Link><br />
                                <Link className={classes.LinkTitle}>Singapore 079903.</Link><br />
                                <Link className={classes.LinkTitle}>PH - +65-3163-3225</Link><br />
                            </Grid>
                        </Grid>
                    </>
                }
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.Footer}>© 2020&nbsp;<Link onClick={() => window.open('https://positka.com/')} className={classes.OrgName}><b>&nbsp;POSITKA&nbsp;&nbsp;</b></Link> All Rights Reserved.</Paper>
            </Grid>
        </Router>
    );
}
