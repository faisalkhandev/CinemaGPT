import { useDispatch } from "react-redux";
import { nowPlayMovies } from "../Redux/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constant";

export const useNowPlayingMovie = () => {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    const dispatch = useDispatch();

    useEffect(() => {
        async function getNowPlayingMovies() {
            try {
                const response = await fetch(url, options);
                const json = await response.json();
                dispatch(nowPlayMovies(json.results));
            } catch (error) {
                console.log("Error", error);
            }
        }

        getNowPlayingMovies();
    }, [dispatch, url]);
}
