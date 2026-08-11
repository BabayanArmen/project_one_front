import { useTheme } from "../hooks/theme.hook";
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export function ThemeToggle() {
    const { stateTheme, switchTheme } = useTheme();    
    return (
        <IconButton color="inherit" onClick={switchTheme}>
            {stateTheme == 'light' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
    )
}