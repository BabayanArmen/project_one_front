import type { ThemeMode } from "../types/theme.types";
import { useLocalStorageGet, useLocalStorageSet } from "./localStorage.hook";

export function useTheme(theme: ThemeMode, save:boolean = true): void {
    document.documentElement.dataset.theme = theme;
    if (save) useLocalStorageSet("theme", theme);
}

export function useDefaultTheme(): void {
    useTheme(useLocalStorageGet("theme") || "dark", false);
}

export function useGetCurrentTheme(): ThemeMode {
    return useLocalStorageGet("theme") || "dark";
}