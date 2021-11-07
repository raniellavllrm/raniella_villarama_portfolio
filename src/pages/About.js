import React from 'react'
import { Card, Button, Typography, Paper, Link, Divider, Stack, CardMedia } from '@mui/material';

import Header from "../components/Header";
import Footer from "../components/Footer";

import { Box } from '@mui/system';

import { ReactComponent as Memoji } from "../assets/svg/memoji.svg";
import { ReactComponent as FacebookIcon } from "../assets/svg/facebook.svg";
import { ReactComponent as TwitterIcon } from "../assets/svg/twitter.svg";
import { ReactComponent as InstagramIcon } from "../assets/svg/instagram.svg";
import PhotoOne from "../assets/images/photo_one.jpg";
import PhotoTwo from "../assets/images/photo_two.jpg";
import PhotoThree from "../assets/images/photo_three.jpg";


export default function About() {
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
        name: {
            fontFamily: "Helvetica Neue",
            fontWeight: "bold",
            paddingBottom: 2,
            '@media screen and (min-width: 1700px)': {
                fontSize: 60
            },
        },
        bodyText: {
            fontFamily: "Helvetica Neue",
            paddingBottom: 4,
            marginTop: 1,
            '@media only screen and (max-width: 900px)': {
                paddingBottom: 2
            }
        },
        bullet: {
            fontFamily: "Helvetica Neue",
            paddingBottom: 1
        },
        divider: {
            marginTop: 4
        },
        memoji: {
            margin: "auto",
            height: 200,
            width: 200,
            '@media screen and (min-width: 900px)': {
                height: 500,
                width: 500,
            },
        },
        icons: {
            display: "inline-block",
            height: 30,
            width: 30,
        },
        contactButton: {
            marginTop: 2,
            marginBottom: 4,
            fontFamily: "Helvetica Neue",
            fontWeight: "bold",
            fontSize: 12,
            borderRadius: 0,
            boxShadow: 0,
            width: 120,
            padding: 1
        },
        centerDiv: {
            '@media only screen and (max-width: 900px)': {
                textAlign: "center"
            }
        },
        middleIcon: {
            display: "inline-block",
            height: 30,
            width: 30,
            marginLeft: 2,
            marginRight: 2
        },
        memojiCenter: {
            display: "flex",
            '@media screen and (min-width: 900px)': {
                display: "none"
            }
        },
        memojiLeft: {
            '@media screen and (max-width: 900px)': {
                display: "none"
            }
        },
        cardMedia: {
            width: "100%",
            '@media screen and (min-width: 900px)': {
                height: "100%",
            }
        }
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
                    <Stack
                        sx={style.centerDiv}
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}>
                        <Box>
                            <Typography sx={style.typography} variant="h1" color="default"> about.</Typography>
                            <Box sx={style.memojiCenter}>
                                {memojiBox}
                            </Box>
                            <Typography sx={style.bodyText} variant="h5" color="default" display="inline"> ━ Hello! I'm </Typography>
                            <Typography sx={style.name} variant="h3" color="primary" display="inline">Raniella Villarama</Typography>
                            <Typography sx={style.bodyText} variant="subtitle1" color="default" padding={0}>Front-End Developer | Designer</Typography>
                            <Typography sx={style.bodyText} variant="h6" color="default">I enjoy developing things from scratch. Like a blank boring screen to a whole page of awesomeness! And I do sincerely believe that in this profession, imagination is the only limit.</Typography>
                            <Typography sx={style.bodyText} variant="h5" color="secondary"><em>Interested in pixelating your imagination?</em></Typography>
                            <Stack direction="column" sx={{ marginLeft: 0 }}>
                                <Box >
                                    <Link href="/contact" sx={{ textDecoration: "none" }}>
                                        <Button variant="contained" sx={style.contactButton}>Contact Me</Button>
                                    </Link>
                                </Box>
                                <Box>
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
                            </Stack>
                        </Box>
                        <Box sx={style.memojiLeft}>
                            {memojiBox}
                        </Box>
                    </Stack>
                    <Divider sx={style.divider} color="default" />
                    <Stack
                        sx={{ paddingTop: 6, paddingBottom: 6 }}
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                    >
                        <Card sx={style.cardMedia}>
                            <CardMedia
                                component="img"
                                height="250"
                                image={PhotoOne}
                            />
                        </Card>
                        <Card sx={style.cardMedia}>
                            <CardMedia
                                component="img"
                                height="250"
                                image={PhotoTwo}
                            />
                        </Card>
                        <Card sx={style.cardMedia}>
                            <CardMedia
                                component="img"
                                height="250"
                                image={PhotoThree}
                            />
                        </Card>
                    </Stack>
                    <Typography sx={style.bodyText} variant="h5" color="secondary" display="inline"> ━ Further Information</Typography>
                    <Typography sx={style.bodyText} variant="h6" color="default" align="justify">
                        I am <em>Raniella Villarama</em>, a <em><b>BSIT Student</b></em> who majors in Web & Mobile Development currently residing in Bulacan, Philippines. I share
                        a deep passion over witnessing the images I have in mind projected on the screen using codes. Although I mostly use a minimalistic approach
                        in terms of designs for a clean and efficient code, I would also share 100% of my ability to provide
                        a heavy web designs.
                    </Typography>
                    <Typography sx={style.bullet} variant="h5" color="primary" align="justify">
                        I am also strong in these particular aspects:
                    </Typography>
                    <Typography sx={style.bullet} variant="h6" color="default" align="justify">
                        • I can work, efficient as much as possible, individually or by team.
                    </Typography>
                    <Typography sx={style.bullet} variant="h6" color="default" align="justify">
                        • Once I have my eyes towards my goal, I won't stop until I finish it.
                    </Typography>
                    <Typography sx={style.bullet} variant="h6" color="default" align="justify">
                        • I listen to criticisms & tries to adapt and improve through it.
                    </Typography>
                    <Box >
                        <Link href="/contact" sx={{ textDecoration: "none" }}>
                            <Button variant="outlined" sx={style.contactButton} color="secondary">Contact Me</Button>
                        </Link>
                    </Box>
                </Box>
            </Paper>
            <Footer />
        </Box>
    )
}
