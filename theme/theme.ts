import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: 'hsl(308, 56%, 85%)',
          contrastText: 'hsl(210, 22%, 22%)',
        },
        secondary: {
          main: 'hsl(196, 75%, 88%)',
          contrastText: 'hsl(210, 22%, 22%)',
        },
        background: {
          default: 'hsl(210, 100%, 97%)',
          paper: 'hsl(210, 100%, 97%)',
        },
        text: {
          primary: 'hsl(339, 20%, 20%)',
        },
        error: {
          main: 'hsl(0, 93%, 73%)',
          contrastText: 'hsl(210, 22%, 22%)',
        }
      },
    },
    dark: {
      palette: {
        primary: {
          main: 'hsl(36, 45%, 70%)',
          contrastText: 'hsl(36, 45%, 11%)',
        },
        secondary: {
          main: 'hsl(40, 35%, 77%)',
          contrastText: 'hsl(36, 45%, 25%)',
        },
        background: {
          default: 'hsl(36, 39%, 88%)',
          paper: 'hsl(36, 39%, 88%)',
        },
        text: {
          primary: 'hsl(36, 45%, 15%)',
          secondary: 'rgba(0, 0, 0, 0.6)'
        },
        error: {
          main: 'hsl(0, 84%, 37%)',
          contrastText: 'hsl(0, 0%, 98%)',
        },
      },
    },
  },
});

export default theme;