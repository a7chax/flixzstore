import {  createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background : {
      default : "#252525"
    },
    primary : {
      main : "#FEFA07"
    }
  },
  typography : {
    fontFamily: "Open Sans",
  }
});

export default theme