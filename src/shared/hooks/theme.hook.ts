import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from '../styles/theme';
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { changeTheme } from "../../features/themeSlice";
import { useLocalStorageGet, useLocalStorageSet } from "./localStorage.hook";

export function useTheme() {
    const [theme, setTheme] = useState(lightTheme);

    const dispatch = useDispatch<AppDispatch>();

    const stateTheme = useSelector((state: RootState) => {
        return state.theme.mode;
    })

    const switchTheme = () => {
        if (stateTheme == "dark") {
            dispatch(changeTheme('light'));
            useLocalStorageSet('theme', 'light');
        } else {
            dispatch(changeTheme('dark'));
            useLocalStorageSet('theme', 'dark')
        }
    }

    useEffect(() => {
        const storageTheme = useLocalStorageGet('theme') ?? null;
        if (storageTheme) {
            dispatch(changeTheme(storageTheme));
        } else {
            dispatch(changeTheme('dark'));
        }
    }, [])

    useEffect(() => {
        if (stateTheme == 'dark') {
            setTheme(darkTheme);
        }

        if (stateTheme == 'light') {
            setTheme(lightTheme);
        }
    }, [stateTheme])
    
    return { theme, stateTheme, switchTheme };
}