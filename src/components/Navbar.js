import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'; // change material-ui default styles
import MobileRightMenuSlider from '@material-ui/core/Drawer';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemIcon,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core";
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail,
    Person,
    Work
} from '@material-ui/icons';
// import Footer from './Footer';
import avatar from '../images/myPhoto.jpg';

//CSS Styles
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: '250',
        background: '#511',
        height: '100%'
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13)

    },
    listItem: {
        color: 'tan'
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: '/'
    },
    {
        listIcon: <Work />,
        listText: "Works",
        listPath: '/working-experience'
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: '/resume'
    },
    {
        listIcon: <Apps />,
        listText: "Projects",
        listPath: '/projects'
    },
    {
        listIcon: <Person />,
        listText: "About Me",
        listPath: '/aboutMe'
    },
    {
        listIcon: <ContactMail />,
        listText: "Contacts",
        listPath: '/contacts'
    }
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = ((slider, open) => () => {
        setState({ ...state, [slider]: open });
    });
    const classes = useStyles();

    const sideList = slider => (
        <Box 
            className={classes.menuSliderContainer} 
            component="div"
            onClick={toggleSlider('right',false)}
            >
            <Avatar className={classes.avatar} src={avatar} alt="Bruno Nguyen" />
            <Divider />
            <List>
                {
                    menuItems.map((lsItem, key) => (
                        <ListItem button key={key} component={Link} to={lsItem.listPath}>
                            <ListItemIcon className={classes.listItem}>
                                {lsItem.listIcon}
                            </ListItemIcon>
                            <ListItemText className={classes.listItem} primary={lsItem.listText} />
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );
    return (
        <>
            <Box component="nav">
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider('right', true)}>
                            <ArrowBack style={{ color: "tomato" }} />
                        </IconButton>
                        <Typography variant="h5" style={{ color: 'tan' }}>
                            NHAN NGUYEN
                        </Typography>
                        <MobileRightMenuSlider
                            anchor="right"
                            open={state.right}
                            onClose={toggleSlider('right', false)}
                            style={{justifyContent: 'center'}}
                        >
                            {sideList('right')}
                            {/* <Footer /> */}
                        </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar
