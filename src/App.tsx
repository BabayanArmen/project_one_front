import './App.scss'
import { ThemeToggle } from './shared/components/ThemeToggle';
import { useDefaultTheme } from './shared/hooks/theme.hook';

function App() {
  useDefaultTheme();
  
  return (
    <>
      <h1>Project One</h1>

      <ThemeToggle />
    </>
  )
}

export default App
