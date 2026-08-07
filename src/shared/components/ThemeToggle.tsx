import { useState } from "react";
import { useGetCurrentTheme, useTheme } from "../hooks/theme.hook";

export function ThemeToggle() {
    const [theme, setTheme] = useState(useGetCurrentTheme());

    const onSetTheme = () => {
        if (theme == "dark") {
            useTheme("light");
            setTheme("light")
        } else {
            useTheme("dark");
            setTheme("dark");
        }
    }
    
    return (
        <>
            <button onClick={onSetTheme}>{theme}</button>
        </>
    )
}