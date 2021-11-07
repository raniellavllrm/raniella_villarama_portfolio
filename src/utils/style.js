const style = ({
    appBar: {
        padding: 1,
        position: "relative",
        paddingTop: theme => theme.spacing(1),
        paddingBottom: theme => theme.spacing(1),
    },
    toolBar:{
        '@media only screen and (min-width: 480px)': {
            marginLeft: '4%',
            marginRight: '4%',
        },
        '@media only screen and (min-width: 1700px)': {
            marginLeft: '15%',
            marginRight: '15%',
        },
    },
    logo: {
        height: 50,
        width: 50,
        color: theme => theme.palette.common.white,
        '@media screen and (min-width: 480px)': {
            height: 85,
            width: 85,
        }
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
    menuButton: {
        '@media screen and (min-width: 720px)': {
            display: "none"
        }
    },
    navBar: {
        '@media screen and (max-width: 720px)': {
            display: "none",
        }
    },
    dividerLine: {
        '@media screen and (min-width: 720px)': {
            display: "none",
        }
    },
    drawer: {
        position: "relative",
        zIndex: 1,
    },
  
    toolbar: theme => theme.mixins.toolbar,
});

export default style;