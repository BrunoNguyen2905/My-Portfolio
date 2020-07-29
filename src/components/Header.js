import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Avatar,
    Grid,
    Box
} from '@material-ui/core';
import avatar from '../images/myPhoto.jpg';
import Typed from 'react-typed';
import classess from './CssFiles/Header.module.css';
import Image from 'material-ui-image';
//CSS STYLES
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        margin: theme.spacing(2)

    },
    title: {
        color: 'tomato'
    },
    subTitle: {
        color: 'tan',
        marginBottom: '3rem'
    },
    typedContainer: {
        position: 'absolute',
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    },
    line: {
        maxWidth: "250px"
    },
    skills: {
        color: 'tan',
        fontSize: '1.3rem'
    },
    emoji: {
        height: '1em',
        width: "1em",
        margin:'0px 0.05em, 0px 0.1em',
        verticalAlign: '-0.1em'
    }

}));

const Header = () => {

    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar src={avatar} alt="Bruno Nguyen" className={classes.avatar} />
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Nhan Nguyen"]} typeSpeed={40} />
                <img className={`${classess.wave} ${classes.emoji}`} src="https://twemoji.maxcdn.com/2/72x72/1f44b.png" />
            </Typography>
            
            <br />
            <Typography className={classes.subTitle} variant="h5">
                <Typed
                    strings={["FULL STACK WEB DEVELOPER"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </Typography>
            <hr className={classes.line}/>
           <Box component="div" className={classes.skills}>
                HTML/CSS| Bootstrap| Javascript| React| NodeJS| Express| MongoDB
           </Box>
        </Box>
    )
}

export default Header
