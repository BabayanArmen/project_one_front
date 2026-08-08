import { createTheme } from '@mui/material/styles';

const baseTheme = {
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
            lineHeight: 1,
            padding: '10px',
            textTransform: 'none',
        },
      },
    },
  },
};

export const lightTheme = createTheme({
...baseTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#075A8A',
      light: '#3B82B5',
      dark: '#043F61',
      contrastText: '#fff',
    }
  },
});

export const darkTheme = createTheme({
...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#075A8A',
      light: '#5AA9D4',
      dark: '#043F61',
      contrastText: '#fff',
    }
  },
});