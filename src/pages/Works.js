import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from '../components/SEO';

import { Box } from '@mui/system';

import { Stack, Link, Card, Grid, Typography, Paper, CardContent, CardMedia, CardActions, CardActionArea, Button } from '@mui/material';


import * as Constants from '../constants/works'

export default function Works() {

    const style = {
        background: {
            paddingLeft: 2,
            paddingRight: 2,
            borderRadius: 0,
            paddingBottom: 0,
            paddingTop: 5,
            '@media only screen and (max-width: 900px)': {
                paddingTop: 2
            }
        },
        body: {
            '@media only screen and (min-width: 480px)': {
                marginLeft: '4%',
                marginRight: '4%',
                paddingBottom: 23
            },
            '@media only screen and (min-width: 1700px)': {
                marginLeft: '15%',
                marginRight: '15%',
                paddingBottom: 13
            },
            paddingBottom: 10
        },
        bodyText: {
            fontFamily: "Helvetica Neue",
            paddingBottom: 4,
            marginTop: 1,
            '@media only screen and (max-width: 900px)': {
                paddingBottom: 2
            }
        },
        typography: {
            fontFamily: "Helvetica Neue",
            fontWeight: "bold",
            paddingBottom: 2,
            '@media only screen and (max-width: 900px)': {
                paddingBottom: 0,
                fontSize: 45,
                textAlign: "left"
            }
        },
        linkTexts: {
            color: theme => theme.palette.text.primary,
            opacity: 0.8,
            textDecoration: "none",
        }
    }
    return (
        <Box>
            <SEO title="Works - Raniella Villarama" description="RANIELLA VILLARAMA WEB DEVELOPER PORTFOLIO ... Works" />
            <Header />
            <Paper sx={style.background} elevation={0}>
                <Box sx={style.body}>
                    <Typography sx={style.typography} variant="h1" color="default"> works.</Typography>
                    <Typography sx={style.bodyText} variant="h6" color="default">Throughout the course of my chosen education,
                        I have also contributed to the following projects which showcases my skills & experience:</Typography>
                    <Box sx={{ flexGrow: 1, paddingBottom: 4 }}>
                        <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {Array.from(Constants.projects).map((_, index, source, projectName, category) => (
                                <Grid item xs={6} sm={4} md={4} key={index} >
                                    <Card variant="outlined" sx={{ maxWidth: 420, backgroundColor: "white" }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="170"
                                                image={Constants.projects[index].source}
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "black" }}>
                                                    {Constants.projects[index].projectName}
                                                </Typography>
                                                <Stack direction="row" spacing={1}>
                                                    {Constants.projects[index].category}
                                                </Stack>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Link href={Constants.projects[index].link} target="_blank" sx={style.linkTexts}>
                                                <Button size="small" color="secondary">
                                                    View Project
                                                </Button>
                                            </Link>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Paper>
            <Footer />
        </Box>
    )
}
