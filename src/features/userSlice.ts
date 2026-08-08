import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { User } from "../shared/models/user.model"
// import { get } from "../shared/services/http.service"

interface UserState {
    user: User | null,
    isAuth: boolean
}

const initialState: UserState = {
    user: null,
    isAuth: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(loadMe.pending, () => {
                console.log("user is loading");
            })
            .addCase(loadMe.fulfilled, (state, action: PayloadAction<User>) => {
                state.user = action.payload;
                state.isAuth = true;
            })
    },
})

export const loadMe = createAsyncThunk(
    "user/getMe",
     async () => {
        // return await get("api-url");
        const user: User = {
            id: 1,
            name: "John Smith",
            role: {id: 1, name: 'admin'}
        }
        return await new Promise<User>((resolve) => 
            setTimeout(() => resolve(user), 1000));
     }
)

export default userSlice.reducer;
export const { setUser } = userSlice.actions;