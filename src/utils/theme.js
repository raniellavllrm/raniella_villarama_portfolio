const theme = (isDarkMode) =>({
    palette: {
        mode: isDarkMode ? "dark" : "light",
        primary: {
          main: '#50e3c2',
          light: '#50e3c2',
          dark: '#26ce96',
        },
        secondary: {
          main: '#ff5436',
          dark: '#ff5436',
          light: '#ff8975',
        },
      },
});
export default theme;