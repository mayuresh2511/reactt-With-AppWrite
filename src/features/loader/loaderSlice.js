import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false
}

export const loaderSlice = createSlice({
    name: "loader",
    initialState: initialState,
    reducers: {
        setLoading: (state) => {state.isLoading = true},
        unSetLoading: (state) => {state.isLoading = false}
    }
})

export const {setLoading, unSetLoading} = loaderSlice.actions;
export default loaderSlice.reducer;