import React from 'react'

import { useDispatch } from 'react-redux';
import { toggleTheme} from "../redux/actions/uiAction";
import { useSelector } from 'react-redux';

import { AppBar, Link, Drawer, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BrightIcon from '@mui/icons-material/Brightness5';
import NightIcon from '@mui/icons-material/NightsStay';
import style from "../utils/style"

//svg imports

import { ReactComponent as LogoIcon } from "../assets/svg/rvlogo.svg"
export default function Header(props) {
  const dispatch = useDispatch();
  const mode = useSelector(state => state.ui);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const divider = (
    <Divider sx={style.dividerLine} variant="middle" />
  )

  const drawer = (
    <Box>
      <Link href="/about" sx={style.linkTexts}>
        about
      </Link>
      {divider}
      <Link href="/services" sx={style.linkTexts}>
        services
      </Link>
      {divider}
      <Link href="/works" sx={style.linkTexts}>
        works
      </Link>
      {divider}
      <Link href="/contact" sx={style.linkTexts}>
        contact
      </Link>
      {divider}
      <IconButton sx={style.linkTexts} onClick={() => dispatch(toggleTheme(!mode.isDarkMode))}>
        {mode.isDarkMode ? <BrightIcon /> : <NightIcon />}
      </IconButton>
    </Box>
  )

  return (
    <Box>
      <AppBar position="static" sx={style.appBar} color="default" elevation={0}>
        <Toolbar sx={style.toolBar}>
          <Box sx={style.logo}>
            <LogoIcon id="logoImage" style={{ height: "inherit", width: "inherit", color: "inherit" }} />
          </Box>
          <Box component="span" sx={{ flexGrow: 1 }} />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={style.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={style.navBar}>
            {drawer}
          </Box>
          <Drawer
            variant="temporary"
            anchor="top"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}