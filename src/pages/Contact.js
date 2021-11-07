import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box } from '@mui/system';

import emailjs from "emailjs-com";

import { Grid, Button, Typography, Paper, Link, Stack, TextField } from '@mui/material';

import { ReactComponent as Memoji } from "../assets/svg/memoji_call.svg";
import { ReactComponent as FacebookIcon } from "../assets/svg/facebook.svg";
import { ReactComponent as TwitterIcon } from "../assets/svg/twitter.svg";
import { ReactComponent as InstagramIcon } from "../assets/svg/instagram.svg";

export default function Works() {
    function sendEmail(e) {
        e.preventDefault();
        console.log(e);
        emailjs.sendForm("gmail", "template_bcko4h7", e.target, "user_GE55qZV5QgrJusnmu4i02")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    const socialAccount = {
        facebook: {
            link: "https://www.facebook.com/ranyelavillarama",
            color: "#1778F2"
        },
        twitter: {
            link: "https://twitter.com/raniellavllrm",
            color: "#1DA1F2"
        },
        instagram: {
            link: "https://www.instagram.com/raniellavillarama/",
            color: "E1306C"
        }
    }
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
        centerDiv: {
            '@media only screen and (max-width: 900px)': {
                textAlign: "center"
            }
        },
        bodyText: {
            fontFamily: "Helvetica Neue",
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
        memoji: {
            margin: "auto",
            height: 200,
            width: 200,
            '@media screen and (min-width: 900px)': {
                height: 370,
                width: 370,
                paddingBottom: 7
            },
        },
        memojiCenter: {
            '@media screen and (min-width: 900px)': {
                display: "none"
            }
        },
        memojiLeft: {
            '@media screen and (max-width: 900px)': {
                display: "none"
            }
        },
        icons: {
            display: "inline-block",
            height: 50,
            width: 50,
        },
        middleIcon: {
            display: "inline-block",
            height: 50,
            width: 50,
            marginLeft: 2,
            marginRight: 2
        },
    }
    const memojiBox = (
        <Box sx={style.memoji} >
            <Memoji style={{ height: "inherit", width: "inherit", color: "inherit" }} />
        </Box >
    )
    return (
        <Box>
            <Header />
            <Paper sx={style.background} elevation={0}>
                <Box sx={style.body}>
                    <Typography sx={style.typography} variant="h1" color="default"> contact.</Typography>
                    <Typography sx={style.bodyText} variant="h6" color="default" align="left"> Feel free to get in touch with me.
                        I am more than willing to put your visions into reality. Let's start pixelating your imagination! </Typography>
                    <Stack
                        sx={style.centerDiv}
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}>
                        <Box sx={style.memojiLeft}>
                            {memojiBox}
                        </Box>
                        <Box sx={style.memojiCenter}>
                            {memojiBox}
                        </Box>
                        <Box>
                            <form noValidate onSubmit={sendEmail}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            id="email"
                                            label="Your Email"
                                            name="reply_to"
                                            size="small"
                                            autoComplete="email"
                                            sx={{
                                                marginLeft: "auto",
                                                marginRight: "auto",

                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            name="from_name"
                                            label="Your Name"
                                            size="small"
                                            sx={{
                                                marginLeft: "auto",
                                                marginRight: "auto"
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            multiline
                                            rows={5}
                                            name="message"
                                            label="Your Message"
                                            size="small"
                                            sx={{
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                marginBottom: 3
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sx={{
                                        textAlign: "center"
                                    }}>
                                        <Button
                                            type="submit"
                                            variant="outlined"
                                            color="secondary"
                                            sx={{
                                                width: 240,
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                marginBottom: 3,

                                            }}
                                        >
                                            Send Email
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                            <Typography variant="subtitle1" color="default" align="center" sx={{ paddingBottom: 3 }}> ──────── or ────────</Typography>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                sx={{ paddingBottom: 3 }}
                            >
                                <Link target="_blank" href={socialAccount.facebook.link} sx={style.icons}>
                                    <FacebookIcon style={{ height: "inherit", width: "inherit", color: socialAccount.facebook.color }} />
                                </Link>
                                <Link target="_blank" href={socialAccount.instagram.link} sx={style.middleIcon}>
                                    <InstagramIcon style={{ height: "inherit", width: "inherit", color: socialAccount.instagram.color }} />
                                </Link>
                                <Link target="_blank" href={socialAccount.twitter.link} sx={style.icons}>
                                    <TwitterIcon style={{ height: "inherit", widthF: "inherit", color: socialAccount.twitter.color }} />
                                </Link>
                            </Box>
                        </Box>
                    </Stack>
                </Box>
            </Paper>
            <Footer />
        </Box>
    )
}
