import { Outlet } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MainDrawerMenu from "../shared/components/MainDrawerMenu";
import { ThemeToggle } from "../shared/components/ThemeToggle";

export function ProfileLayout() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <MainDrawerMenu/>
                        <Box sx={{ml: 'auto'}}>
                            <ThemeToggle/>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <Outlet />
        </>
    )
}