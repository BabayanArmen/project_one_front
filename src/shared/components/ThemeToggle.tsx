import Button from '@mui/material/Button';
import { useTheme } from "../hooks/theme.hook";

export function ThemeToggle() {
    const { stateTheme, switchTheme } = useTheme();    
    return (
        <Button variant="contained" size="small" onClick={switchTheme}>
            {stateTheme}
        </Button>
    )
}