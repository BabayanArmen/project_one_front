import type { LocalStorageKey } from "../types/localStorageKey.types";

export function useLocalStorageSet(key: LocalStorageKey, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function useLocalStorageGet(key: LocalStorageKey) {
    const value = localStorage.getItem(key);
    if (value) {
        return JSON.parse(value);
    };

    return null;
}

export function useLocalStorageRemove(key: LocalStorageKey) {
    return localStorage.removeItem(key);
}