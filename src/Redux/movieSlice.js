import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        moviesList: []
    },
    reducers: {
        setMoviesList: (state, action) => {
            state.moviesList = action.payload;
        }
    }

})

export const { setMoviesList } = movieSlice.actions;
export default movieSlice.reducer;