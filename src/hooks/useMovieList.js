import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMoviesList } from "../Redux/movieSlice";
import { options } from "../utils/constant";

const movieAPI = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";



export const useMovieList = () => {
    const dispatch = useDispatch();

    async function getMoviesList() {
        try {
            const data = await fetch(movieAPI, options);
            const json = await data.json();
            console.log("Movies::", json);
            dispatch(setMoviesList(json.results));
        } catch (error) {
            console.log("errorMovies::", error);
        }
    }

    useEffect(() => {
        getMoviesList();
    }, []);
}
