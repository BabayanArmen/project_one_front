import './App.scss'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// import { useFetchData } from './shared/hooks/useFetchData.hook';
import { ThemeToggle } from './shared/components/ThemeToggle';
import { useTheme } from './shared/hooks/theme.hook';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { loadMe } from './features/userSlice';
import type { AppDispatch, RootState } from './app/store';

function App() {
  const { theme } = useTheme();

  const dispatch = useDispatch<AppDispatch>();

  const user = useSelector((state: RootState) => {
    console.log(state.currentUser.user);
    return state.currentUser.user;
  })
  
  // const { data, load, loading, error } = useFetchData("https://jsonplaceholder.typicode.com/posts");
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div style={{padding: '20px'}}>
        <h1>Project One</h1>
        <ThemeToggle />

        <Button variant="contained" size="small" onClick={() => dispatch(loadMe())}>Get Me</Button>
        <span>{user?.name}</span>
        
      </div>

      {/* {loading && <div>Loading...</div>}

      {error && <span>Error</span>} */}

    </ThemeProvider>
  )
}

export default App
