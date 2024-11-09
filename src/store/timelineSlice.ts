
import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { timelineData } from '../services/timelineData'
import {screenshotType, timelineItemType} from "../App.types";

const initialState: timelineItemType[] = timelineData;

export const timelineSlice = createSlice({
    name: 'timeline',
    initialState,
    reducers: { },
})

export const selectTimeline = (state: RootState) => state.timeline
export const selectScreenshots = (state: RootState) => {
    let shots:screenshotType[]=[];

    state.timeline.map( (item:timelineItemType):any => {
        shots=[...shots,...item.screenshots ?
            item.screenshots.map ( (ss:screenshotType):screenshotType =>
            { return {...ss, company: item.company}})  : []]
    });
    return shots;
}


