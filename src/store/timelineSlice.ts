
import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { timelineData } from '../services/timelineData'
import { timelineItemType} from "../App.types";

const initialState: timelineItemType[] = timelineData;

export const timelineSlice = createSlice({
    name: 'timeline',
    initialState,
    reducers: { },
})

export const selectTimeline = (state: RootState) => state.timeline

