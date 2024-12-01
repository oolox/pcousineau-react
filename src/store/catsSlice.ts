import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'

const initialState = {
    loading: false,
    data: [],
    error: null
};

export const catsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        fetchDataRequest: (state) => {
            state.loading = true;
        },
        fetchDataSuccess: (state, action) => {
            state.loading= false;
            state.data = action.payload;
        }
    },
})

export const { fetchDataRequest, fetchDataSuccess } = catsSlice.actions;
export const selectCats = (state: RootState) => state.cats
