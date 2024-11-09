import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counterSlice'
import { skillsSlice} from "./skillsSlice";
import { skilltreeSlice} from "./skilltreeSlice";
import { timelineSlice} from "./timelineSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        skills: skillsSlice.reducer,
        skilltree: skilltreeSlice.reducer,
        timeline: timelineSlice.reducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch