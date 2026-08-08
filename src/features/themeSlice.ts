import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ThemeMode } from "../shared/types/theme.types";

interface ThemeState {
    mode: ThemeMode;
}

const initialState: ThemeState = {
    mode: null
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme(state, action: PayloadAction<ThemeMode>) {
            state.mode = action.payload;
        }
    }
})

export default themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;