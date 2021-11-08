import React from 'react'

import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from '../components/SEO';

import { Grid, Link, Button, Typography, Paper } from '@mui/material';
import { Box } from '@mui/system';

export default function ErrorPage() {
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
            },
            '@media only screen and (min-width: 1700px)': {
                marginLeft: '15%',
                marginRight: '15%',
            },
        },
        name: {
            fontFamily: "Helvetica Neue",
            fontWeight: "bold",
            paddingBottom: 1,
            paddingTop: 25,
            '@media screen and (min-width: 1700px)': {
                fontSize: 60
            },
            textAlign: "center"
        },
        bodyText: {
            fontFamily: "Helvetica Neue",
            paddingBottom: 1,
            marginTop: 1,
            '@media only screen and (max-width: 900px)': {
                paddingBottom: 2
            },
            textAlign: "center"
        },
        linkTexts: {
            color: theme => theme.palette.text.primary,
            opacity: 0.8,
            textDecoration: "none",
            fontFamily: "Helvetica Neue",
            fontSize: 20,
            display: "inline-block",
            marginLeft: 2,
            '@media screen and (min-width: 900px)': {
                marginLeft: 3
            },
            '@media screen and (max-width: 720px)': {
                display: "block",
                textAlign: "center",
                margin: 2
            },
            "&:hover": {
                color: theme => theme.palette.primary.dark,
                opacity: 1,
            },
            "&:active": {
                color: theme => theme.palette.action.selected,
                opacity: 1,
            }
        },
    }
    return (
        <Box>
            <SEO title="Page does not exist" description="RANIELLA VILLARAMA WEB DEVELOPER PORTFOLIO ... Services offered" />
            <Header />
            <Paper sx={style.background} elevation={0}>
                <Box sx={style.body}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography sx={style.name} variant="h1" color="secondary">404 Not Found</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={style.bodyText} variant="h4" color="default">Oops, looks like the page you requested doesn't exist.</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{
                            textAlign: "center"
                        }}>
                            <Link href="/about" sx={style.linkTexts}>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    sx={{
                                        width: 240,
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        marginBottom: 31,
                                        marginTop: 4

                                    }}
                                >
                                    Go Back Home
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
            <Footer />
        </Box>
    )
}
