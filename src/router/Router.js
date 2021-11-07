import React, { useEffect } from 'react'

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';

import theme from "../utils/theme";
import { getTheme } from '../redux/actions/uiAction';
import About from '../pages/About';
import Services from '../pages/Services';
import Works from '../pages/Works';
import Contact from '../pages/Contact';
import ErrorPage from '../pages/ErrorPage';
export default function Router() {

    useEffect(() => {
        dispatch(getTheme());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const dispatch = useDispatch();
    const mode = useSelector(state => state.ui);
    let THEME = createTheme(theme(mode.isDarkMode));
    THEME = responsiveFontSizes(THEME);
    return (
        <ThemeProvider theme={THEME}>
            <BrowserRouter>
                <Switch>
                    <Redirect exact from="/" to="/about" />
                    <Route component={ErrorPage} path="/notfound" />
                    <Route component={About} path="/about" />
                    <Route component={Services} path="/services" />
                    <Route component={Works} path="/works" />
                    <Route component={Contact} path="/contact" />
                    <Redirect path="" to="/notfound" />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )
}
