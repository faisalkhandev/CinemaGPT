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
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODUwMDFiYWQ2ODAwNjRjYTdiZTE2YzMzZjcxZjg4MiIsIm5iZiI6MTcxOTkwMDY0OC40Mzc3MjUsInN1YiI6IjY0ZWRjYTkxNTI1OGFlMDBhZGQ2Mjc2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ba-ZBzyspYXLkfeDTEmzg7il9b_-_vJSZjbVY7eeb0Q',
        },
    };

    useEffect(() => {
        async function getTopRatedMovies() {
            try {
                const response = await fetch(url, options);
                const json = await response.json();
                console.log('API Response:', json);
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
