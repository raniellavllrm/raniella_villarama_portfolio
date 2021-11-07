import React from 'react'
import { Typography, Box, Link, AppBar, Container, Toolbar, Stack} from '@mui/material';

import { ReactComponent as FacebookIcon } from "../assets/svg/facebook.svg";
import { ReactComponent as TwitterIcon } from "../assets/svg/twitter.svg";
import { ReactComponent as InstagramIcon } from "../assets/svg/instagram.svg";
export default function Footer() {
    const style = {
        body: {
            width: "100%",
        },
        icons: {
            color: theme => theme.palette.text.secondary,
            display: "inline-block",
            height: 30,
            width: 30,
            marginRight: 2,
            marginTop: 2,
        },
        footer: {
            bottom: 0
        },
        iconInherit: {
            height: "inherit", 
            width: "inherit", 
            color: "inherit"
        }
    }
    const socialAccount = {
        facebook: "https://www.facebook.com/ranyelavillarama",
        twitter: "https://twitter.com/raniellavllrm",
        instagram: "https://www.instagram.com/raniellavillarama/"
    }
    return (
        <Box>
            <AppBar position="sticky" color="default" sx={style.footer} >
                <Container maxWidth="md">
                    <Toolbar sx={style.body}>
                        <Typography color="default" align="left">
                            © {new Date().getFullYear()} Raniella Villarama
                        </Typography>
                        <Box component="span" sx={{ flexGrow: 1 }} />
                        <Stack direction="row">
                            <Box>
                                <Link target="_blank" href={socialAccount.facebook} sx={style.icons}>
                                    <FacebookIcon sx={style.iconInherit} />
                                </Link>
                                <Link target="_blank" href={socialAccount.twitter} sx={style.icons}>
                                   <TwitterIcon sx={style.iconInherit} />
                                </Link>
                                <Link target="_blank" href={socialAccount.instagram} sx={style.icons}>
                                   <InstagramIcon sx={style.iconInherit} />
                                </Link>
                            </Box>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}
