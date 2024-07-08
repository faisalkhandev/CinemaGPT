import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        moviesList: [],
        nowPlayingMov: [],
        topRatedMovies: []
    },
    reducers: {
        setMoviesList: (state, action) => {
            state.moviesList = action.payload;
        },
        nowPlayMovies: (state, action) => {
            state.nowPlayingMov = action.payload;
        },
        topRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        }
    }

})

export const { setMoviesList, nowPlayMovies, topRatedMovies } = movieSlice.actions;
export default movieSlice.reducer;