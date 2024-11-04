import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { skillsData } from '../services/skillsData'
import { skillsItemType } from "../App.types";

const initialState: skillsItemType[] = skillsData;


export const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: { },
})

export const selectSkills = (state: RootState) => state.skills

