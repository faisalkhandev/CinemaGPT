import { useDispatch } from 'react-redux';
import { topRatedMovies } from '../Redux/movieSlice';
import { useEffect } from 'react';

export const useTopRatedMovies = () => {
    const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
    const dispatch = useDispatch();

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_MOVIES_API}`,
        },
    };

    useEffect(() => {
        async function getTopRatedMovies() {
            try {
                const response = await fetch(url, options);
                const json = await response.json();

                if (json.results) {
                    dispatch(topRatedMovies(json.results));
                } else {
                    console.log('No results found in the API response.');
                }
            } catch (error) {
                console.log('Error', error);
            }
        }

        getTopRatedMovies();
    }, [dispatch, url]);
};
