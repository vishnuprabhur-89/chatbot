import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: 'grey',
        cursor: "pointer",
        fontFamily: 'sans-serif',
        [theme.breakpoints.down(650)]: {
            width: "12%",
        }
    },
    toolbar_design: {
        backgroundColor: "whitesmoke"
    },
    logo_design: {
        width: "4%",
        cursor: "pointer",
        [theme.breakpoints.down(650)]: {
            width: "12%",
        }
    },
    button_design: {
        color: "#c92228",
        backgroundColor: "white",
        borderRadius: "25px",
        '&:hover': {
            color: "white",
            backgroundColor: "#c92228",
        }
    },
    button_design1: {
        color: "white",
        backgroundColor: "#c92228",
        borderRadius: "25px",
        '&:hover': {
            color: "#c92228",
            backgroundColor: "white",
            border: "1px solid #c92228"
        }
    },
    poster_design: {
        width: "55%"
    },
    poster_head: {
        padding: "30px"
    },
    headline: {
        fontSize: "4.5vmin",
        fontFamily: 'sans-serif',
        color: "#c92228"
    },
    about: {
        fontSize: "2.5vmin",
        fontFamily: 'sans-serif',
        lineHeight: "30px",
        fontWeight: 200,
        color: "#c92228"
    },
    intro: {
        fontSize: "3vmin",
        fontFamily: 'sans-serif',
        lineHeight: "30px",
        fontWeight: 200,
        marginTop: "-20px",
        color: "#c92228"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    Lots: {
        padding: theme.spacing(5),
        [theme.breakpoints.down(1050)]: {
            padding: theme.spacing(2)
        },
        [theme.breakpoints.down(750)]: {
            padding: theme.spacing(1),
            paddingLeft: "20px"
        },
        textAlign: 'center',
        backgroundColor: "#212121"
    },
    Lot1: {
        color: "white",
        textAlign: "left",
    },
    Footer: {
        textAlign: "center",
        backgroundColor: "grey",
        color: "white",
        padding: "10px",
        fontFamily: 'sans-serif',
        fontSize: "15px",
        [theme.breakpoints.down(500)]: {
            fontSize: "10px",
        },
        bottom: 0,
        left: 0,
        right: 0
    },
    LinkTitle: {
        lineHeight: "2",
        fontFamily: 'sans-serif',
        fontSize: "15px",
        [theme.breakpoints.down(1050)]: {
            fontSize: "10px",
        },
        textDecoration: "none",
        color: "white",
        '&:hover': {
            textDecoration: "underline"
        }
    },
    Title: {
        fontFamily: 'sans-serif',
    },
    Title1: {
        fontFamily: 'sans-serif',
    },
    OrgName: {
        color: "#c92228",
        textDecoration: "none",
    },
    footer_design: {
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
    },
    layout: {
        flexGrow: 1,
        marginTop: "30px",
        marginBottom: "30px",
    },
    Body: {
        padding: "25px"
    },
    intro_design: {
        fontFamily: 'sans-serif',
        fontSize: "3vmin",
        color: "#196CFF",
        [theme.breakpoints.down(650)]: {
            lineHeight: "25px",
            fontSize: "4vmin",
        }
    },
    radio_header: {
        marginTop: "15px"
    },
    logo_design1: {
        width: "5%",
        cursor: "pointer",
        display: "inline-block",
        [theme.breakpoints.down(650)]: {
            width: "12%",
        }
    },
    timer_design: {
        display: "inline-block",
    },
    Main_Style: {
        backgroundColor: "white",
    },
    Question: {
        marginLeft: "20px",
        fontSize: "3.3vmin",
        fontFamily: 'sans-serif',
        [theme.breakpoints.down(650)]: {
            marginTop: "-10px",
            fontSize: "4vmin",
            lineHeight: "25px"
        }
    },
    Option: {
        marginLeft: "20px",
        fontSize: "3.3vmin",
        fontFamily: 'sans-serif',
        textAlign: "right",
        [theme.breakpoints.down(650)]: {
            fontSize: "2vmin",
            textAlign: "left",
        }
    },
    Option_Design: {
        color: "white",
        backgroundColor: "#196CFF",
        borderRadius: "25px",
        marginLeft: "20px",
        '&:hover': {
            color: "#196CFF",
            backgroundColor: "white",
            border: "1px solid #196CFF"
        },
        [theme.breakpoints.down(650)]: {
            margin: "5px"
        }
    },
    Submit_Design: {
        color: "white",
        backgroundColor: "#196CFF",
        borderRadius: "25px",
        marginLeft: "20px",
        marginTop: "8px",
        '&:hover': {
            color: "#196CFF",
            backgroundColor: "white",
            border: "1px solid #196CFF"
        },
        [theme.breakpoints.down(650)]: {
            margin: "5px",
        }
    },
    Search_Heading: {
        marginLeft: "20px",
        fontSize: "3.2vmin",
        fontFamily: 'sans-serif',
        lineHeight: "35px",
        marginBottom: "30px",
        [theme.breakpoints.down(650)]: {
            marginTop: "-10px",
            fontSize: "4vmin",
            lineHeight: "25px"
        }
    },
    Search_bar: {
        marginLeft: "20px",
        fontSize: "3vmin",
        fontFamily: 'sans-serif',
        [theme.breakpoints.down(650)]: {
            fontSize: "2vmin",
        }
    },
    search_input: {
        width: "60%",
        [theme.breakpoints.down(650)]: {
            width: "90%",
        },

        '& label.Mui-focused': {
            color: '#196CFF',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#196CFF',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#196CFF',
            },
            '&:hover fieldset': {
                borderColor: '#196CFF',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#196CFF',
            },
        },
    },
    split: {
        width: "60%",
        backgroundColor: "white",
        color: "#196CFF",
        cursor: "pointer",
        fontFamily: 'sans-serif',
        fontSize: "3vmin",
        padding: "4px",
        borderRadius: "5px",
        '&:hover': {
            color: "white",
            backgroundColor: "#196CFF"
        },
        [theme.breakpoints.down(650)]: {
            width: "90%",
        }
    },
    DOB: {
        width: "10%",
        [theme.breakpoints.down(1050)]: {
            width: "20%"
        },
        [theme.breakpoints.down(1050)]: {
            width: "50%",
        },
        '& label.Mui-focused': {
            color: '#196CFF',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#196CFF',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#196CFF',
            },
            '&:hover fieldset': {
                borderColor: '#196CFF',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#196CFF',
            },
        },
    },
    Symptom_Lister: {
        display: "inline-block",
        backgroundColor: "#196CFF",
        marginRight: "10px",
        fontSize: "2vmin",
        borderRadius: "15px",
        paddingLeft: "5px",
        paddingRight: "5px",
        color: "white",
    },
    Header_Design: {
        marginLeft: "30px"
    },
    para_style: {
        fontSize: "2.5vmin",
        fontFamily: "sans-serif",
        color: "#196CFF",
    },
    title_style: {
        fontSize: '3vmin',
        color: "grey"
    }
}));