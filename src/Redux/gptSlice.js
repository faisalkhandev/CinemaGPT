import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptToggle: false,
    },
    reducers: ({
        showGptView: (state) => {
            state.showGptToggle = !state.showGptToggle;
        }
    })
})

export const { showGptView } = gptSlice.actions
export default gptSlice.reducer;