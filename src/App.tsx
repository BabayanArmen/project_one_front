import './App.scss'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeToggle } from './shared/components/ThemeToggle';
import { useTheme } from './shared/hooks/theme.hook';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { loadMe } from './features/userSlice';
import type { AppDispatch, RootState } from './app/store';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DynamicTable } from './shared/components/dynamicTable';
import type { TableData } from './shared/models/table-data.model';
import { useEffect } from 'react';

const queryClient = new QueryClient();

function App() {
  const { theme } = useTheme();

  const dispatch = useDispatch<AppDispatch>();

  const user = useSelector((state: RootState) => {
    return state.currentUser.user;
  })

  useEffect(() => {
    console.log(user);
  }, [user])
  
  const tableData: TableData = {
    url: "https://jsonplaceholder.typicode.com/posts?", // _start=0&_limit=5
    headers: ['id', 'userId', 'title', 'body']
  }
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div style={{padding: '20px'}}>
          <h1>Project One</h1>
          <ThemeToggle />
          <Button variant="contained" size="small" onClick={() => dispatch(loadMe())}>Get Me</Button>
          <span>{user?.name}</span>
        </div>

        <DynamicTable {...tableData}/>

      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App