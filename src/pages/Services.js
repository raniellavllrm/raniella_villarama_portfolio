import React from 'react'
import { styled } from '@mui/material/styles';

import { Card, Typography, Paper, CardContent, Divider,  Grid } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box } from '@mui/system';
import * as Constants from '../constants/services'
export default function Services() {

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
        iconCenter: {
            width: 100,
            height: 100,
            marginBottom: 5,
            display: "flex",
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
        cardStyle: {
            opacity: 0.9,
            minHeight: 0,
            width: 95,
            height: 95,
            marginBottom: 5,
            textAlign: "center",
            '@media only screen and (max-width: 900px)': {
                width: 70,
                height: 70
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
        label: {
            fontFamily: "Helvetica Neue",
            fontWeight: "bold",
            paddingBottom: 4,
        },
        divider: {
            marginTop: 4,
            marginBottom: 4
        },
        labelSmall: {
            paddingBottom: 3
        },
        bodyText: {
            fontFamily: "Helvetica Neue",
            paddingBottom: 4,
            marginTop: 1,
            '@media only screen and (max-width: 900px)': {
                paddingBottom: 2
            }
        },
    }
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        paddingBottom: 4,
        height: 20,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: "default",
        },
    }));

    return (
        <Box>
            <Header />
            <Paper sx={style.background} elevation={0}>
                <Box sx={style.body}>
                    <Typography sx={style.typography} variant="h1" color="default"> services.</Typography>
                    <Typography sx={style.bodyText} variant="h6" color="default" align="justify">Over the course of my education, I have received various experiences
                        & knowledge that helped me develop competencies that I plan to use to my advantage. Like being able to provide these services while assuring its efficiency: </Typography>
                    <Typography sx={style.label} variant="h4" color="primary"> ━ Design Services:</Typography>
                    <Box sx={{ flexGrow: 1, paddingBottom: 2 }}>
                        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            {Array.from(Constants.designService).map((_, index, component, label) => (
                                <Grid item sx={style.cardStyle} xs={6} key={index} >
                                    {Constants.designService[index].component}
                                    <Typography variant="h6" sx={style.label}>{Constants.designService[index].label}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <Box sx={{paddingBottom: 4}} />
                    <Typography sx={style.label} variant="h4" color="primary"> ━ Coding Services:</Typography>
                    <Box sx={{ flexGrow: 1, paddingBottom: 2 }}>
                        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            {Array.from(Constants.codingService).map((_, index, component, label) => (
                                <Grid item sx={style.cardStyle} xs={6} key={index}>
                                    {Constants.codingService[index].component}
                                    <Typography variant="h6" sx={style.label}>{Constants.codingService[index].label}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <Divider sx={style.divider} color="default" />
                    <Typography sx={style.label} variant="h4" color="secondary"> ━ Skills:</Typography>
                    <Typography sx={style.bodyText} variant="h6" color="default" align="justify">The above services are equipped through these following skills that I have acquired overtime:</Typography>
                    <Box sx={{ flexGrow: 1, paddingBottom: 4}}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {Array.from(Constants.skillSet).map((_, index, skillName, skillValue) => (
                                <Grid item xs={2} sm={4} md={4} key={index}>
                                    <Card variant="outlined" sx={{ height: 100, paddingTop: 2}}>
                                        <CardContent >
                                            <Typography variant="body2">{Constants.skillSet[index].skillName}</Typography>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Box sx={{ width: '100%', mr: 1, color: Constants.skillSet[index].color}}>
                                                    <BorderLinearProgress variant="determinate" value={Constants.skillSet[index].skillValue} display="inline-block" color="inherit"/>
                                                </Box>
                                                <Box sx={{ minWidth: 35 }} >
                                                    <Typography>{Constants.skillSet[index].skillValue}%</Typography>
                                                </Box>
                                            </Box>
                                        </CardContent>
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
