import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        moviesList: []
    },
    reducers: {
        setMoviesList: (state, action) => {
            console.log('Action Payload:', action.payload);
            state.moviesList = action.payload;
            console.log('Updated State:', state.moviesList);
        }
    }

})

export const { setMoviesList } = movieSlice.actions;
export default movieSlice.reducer;