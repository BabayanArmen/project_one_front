import { useEffect, useState } from 'react';
import './App.scss'
// import { ThemeToggle } from './shared/components/ThemeToggle';
// import { useDefaultTheme } from './shared/hooks/theme.hook';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from './shared/styles/theme';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { useFetchData } from './shared/hooks/useItem.hook';

function App() {
  // useDefaultTheme();
  const [theme, setTheme] = useState(lightTheme);

  const { data, load, loading, error } = useFetchData("https://jsonplaceholder.typicode.com/posts");
  console.log(data);
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div style={{padding: '20px'}}>
        <h1>Project One</h1>
        {/* <ThemeToggle /> */}
        <Button variant="contained" size="small" onClick={() => {theme == lightTheme ? setTheme(darkTheme) : setTheme(lightTheme)}}>
         Theme
        </Button>

        <TextField id="outlined-basic" label="Outlined" variant="outlined" />

        <Button variant="contained" size="small" onClick={() => load()}>Get Posts</Button>
        
      </div>

      {loading && <div>Loading...</div>}

      {error && <span>Error</span>}

    </ThemeProvider>
  )
}

export default App
