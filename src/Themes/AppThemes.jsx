import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { grey, pink } from '@mui/material/colors';
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontSize: 15,
    },
  },
  palette: {
    primary: {
      main: grey[700],
    },

    secondary: {
      main: pink[500],
    },
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiLink: {
      defaultProps: {
        sx: {
          color: (theme) => theme.palette.primary.main,
        },
        underline: 'none',
      },
    },
    MuiButton: {
      defaultProps: {
        size: 'small',
        p: 0,
      },
      variant: 'text',
    },
  },
});
const AppThemes = (prop) => {
  return <ThemeProvider theme={theme}>{prop.children}</ThemeProvider>;
};

export default AppThemes;
