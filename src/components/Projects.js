import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';
import Navbar from './Navbar';
import project1 from '../images/html-css-javascript-lg.jpg';
import project2 from '../images/javascript-fullstack.jpg';
import project3 from '../images/react-redux.jpg';
import project4 from '../images/expressjs.png';


const useStyles = makeStyles({
    mainCountainer: {
        background: '#233',
        height: '100%',
    },
    heading: {
        textAlign: 'center',
        color: 'tomato'
    },
    cardContainer: {
        maxWidth: 345,
        margin: '5rem auto'
    }

});

const Portfolio = () => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainCountainer}>
            <Navbar />
            <Typography variant="h2" className={classes.heading}>
                Recent Projects
            </Typography>
            <Grid container justify="center" >
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia //for images
                                component="img"
                                alt="Project 1"
                                height="140"
                                image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5"> {/*gutterBottom If true, the text will have a bottom margin.*/}

                                Project 1
                            </Typography>
                                <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                                    loremIpsum eiusmod enim non nulla nulla. Ex reprehenderit duis qui ut quis. Dolore aute consequat non labore.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* Project 2 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia //for images
                                component="img"
                                alt="Project 2"
                                height="140"
                                image={project2}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5"> {/*gutterBottom If true, the text will have a bottom margin.*/}

                                Project 2
                            </Typography>
                                <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                                    loremIpsum eiusmod enim non nulla nulla. Ex reprehenderit duis qui ut quis. Dolore aute consequat non labore.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* Project 3 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia //for images
                                component="img"
                                alt="Project 3"
                                height="140"
                                image={project3}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5"> {/*gutterBottom If true, the text will have a bottom margin.*/}

                                Project 3
                            </Typography>
                                <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                                    loremIpsum eiusmod enim non nulla nulla. Ex reprehenderit duis qui ut quis. Dolore aute consequat non labore.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* Project 4 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia //for images
                                component="img"
                                alt="Project 4"
                                height="140"
                                image={project4}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5"> {/*gutterBottom If true, the text will have a bottom margin.*/}

                                Project 4
                            </Typography>
                                <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                                    loremIpsum eiusmod enim non nulla nulla. Ex reprehenderit duis qui ut quis. Dolore aute consequat non labore.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>



    )
}

export default Portfolio
