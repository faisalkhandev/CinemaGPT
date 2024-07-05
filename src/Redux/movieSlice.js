import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        moviesList: [],
        nowPlayingMov: []
    },
    reducers: {
        setMoviesList: (state, action) => {
            state.moviesList = action.payload;
        },
        nowPlayMovies: (state, action) => {
            state.nowPlayingMov = action.payload;
        }
    }

})

export const { setMoviesList, nowPlayMovies } = movieSlice.actions;
export default movieSlice.reducer;