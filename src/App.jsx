import { useState, useMemo } from 'react'
import './App.css'
import { AppBar, Container, CssBaseline, styled } from '@mui/material'
import { Button, Box, Switch, Typography} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useOutlet } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

// #EFFFC8 
const light = '#F9FBF2';
const dark = 'rgb(17 24 39)';
const getDesign= (newMode) => ({
  palette: {
    primary: {
        main: newMode == "light" ? light : dark, 
        hover: newMode == "light" ? 'rgba(38, 34, 35, 0.1)' : 'rgba(221, 198, 182, 0.1)'
    },
    secondary: {
        main: newMode == "light" ? dark : light,
    },
  },
  typography: {
    "fontFamily": `"Noto Sans", "Montserrat", "Roboto", "Helvetica", "Arial", sans-serif`,
    allVariants: {
      color: newMode == "light" ? dark : light
    },
    button: {
      textTransform: 'none'
    }
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  }
});

function App() {
  const [mode, setMode] = useState('dark');
  const theme = useMemo(() => createTheme(getDesign(mode)), [mode]);
  const outlet = useOutlet();
  const [curPage, setCurPage] = useState('');

  function toggleDark(){
    setMode(mode == 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{minHeight: '100vh', bgcolor: 'primary.main', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Box className="top-half">
          <Header toggleDark={toggleDark} curPage={curPage} changePage={(page) => setCurPage(page)}/>
          {outlet || <Home mode={mode}/>}
        </Box>
        <Footer mode={mode}/>
      </Box>

    </ThemeProvider>
  )
}

export default App
