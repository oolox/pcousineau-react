import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { skillTree } from '../services/skillTreeData'
import { skillTreeType } from "../App.types";

const initialState: skillTreeType[] = skillTree;


export const skilltreeSlice = createSlice({
    name: 'skilltree',
    initialState,
    reducers: { },
})

export const selectSkilltree = (state: RootState) => state.skilltree

