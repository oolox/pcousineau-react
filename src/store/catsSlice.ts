import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'

const initialState = {
    loading: false,
    ready: false,
    data: [],
    error: null
};

export const catsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        fetchCatsRequest: (state) => {
            state.loading = true;
        },
        fetchCatsSuccess: (state, action) => {
            state.loading= false;
            state.ready = true;
            state.data = action.payload;
        }
    },
})

export const { fetchCatsRequest, fetchCatsSuccess } = catsSlice.actions;
export const selectCats = (state: RootState) => state.cats
