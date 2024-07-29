import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptToggle: false,
        moviesName: false,
        gptMovies: false,
    },
    reducers: ({
        showGptView: (state) => {
            state.showGptToggle = !state.showGptToggle;
        },
        addGptMovies: (state, actions) => {
            const { moviesName, gptMovies } = actions.payload;
            state.moviesName = moviesName;
            state.gptMovies = gptMovies;
        }
    })
})

export const { showGptView, addGptMovies } = gptSlice.actions
export default gptSlice.reducer;