import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core';
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";
import Footer from './Footer';


const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: '#233',
        height: '100vh'
    },
    form: { //make form in the middle browser
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: 'absolute'
    },
    button: {
        color: 'tomato',
        marginTop: '1rem',
        borderColor: 'tomato'
    }
}));

const InputField = withStyles({ //uses the withStyles() higher-order component to inject custom styles into the DOM, and to pass the class name to the ClassNames component via its classes property
    root: {
        "& label.Mui-focused": {
            color: 'tomato'
        },
        "& label": {
            color: 'tan'
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: 'tan'
            },
            "&:hover fieldset": {
                borderColor: 'tan'
            },
            "& .Mui-focused fieldset": {
                color: 'tan'
            }
        }
    }
})(TextField);

const Contacts = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Box component="div" className={classes.mainContainer}>
                <Grid container justify="center">
                    <Box component="form" className={classes.form}>
                        <Typography variant="h5" style={{ color: 'tomato', textAlign: 'center', textTransform: 'uppercase' }}>
                            Hire or Contact me...
                        </Typography>
                        <InputField
                            fullWidth={true}
                            label="Name" variant="outlined"
                            inputProps={{ style: { color: 'white' } }}
                            margin="dense"
                            size="medium"
                        />
                        <br />
                        <InputField
                            fullWidth={true}
                            label="Email"
                            variant="outlined"
                            inputProps={{ style: { color: 'white' } }}
                            margin="dense"
                            size="medium"
                        />
                        <br />
                        <InputField
                            fullWidth={true}
                            label="Company name"
                            variant="outlined"
                            inputProps={{ style: { color: 'white' } }}
                            margin="dense"
                            size="medium"
                        />
                        <br />
                        <Button variant="outlined" fullWidth={true} endIcon={<SendIcon />} className={classes.button}>
                            Contact Me
                        </Button>
                    </Box>
                </Grid>
            </Box>
            <Footer />
        </>
    );
}

export default Contacts
