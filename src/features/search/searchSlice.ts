import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateType {
    searchQuery: string;
}

const initialState: initialStateType = {
    searchQuery: ''
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        SetQuery: (state, action: PayloadAction<string> ) => {
            state.searchQuery = action.payload;
        }
    }
})

export const { SetQuery } = searchSlice.actions;
export default searchSlice.reducer;