import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderSignUp from "../Components/Header";
import { useGetData } from "../hooks/useMovieList";
import { VideoContainer, VideoTitle } from "../Components";
import { setMoviesList } from "../Redux/movieSlice";
import SecondaryContainer from './SecondaryContainer';

const MainPage = () => {
    const dispatch = useDispatch();

    const url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

    // Movies API calling
    const { data: movieList, loading, error } = useGetData(url);

    useEffect(() => {
        if (movieList && movieList.results) {
            dispatch(setMoviesList(movieList.results));
        }
    }, [movieList, dispatch]);

    const movies = useSelector((state) => state.movies?.moviesList);

    useEffect(() => {
        if (movies && movies.length > 0) {
            console.log("moviesRender::", movies)
        }
    }, [movies]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data</p>;
    if (!movies || movies.length === 0) return null;

    const { original_title, overview, id } = movies?.[0] || {};

    return (
        <>
            <div>
                <HeaderSignUp />
            </div>
            <div>
                <VideoContainer title={original_title} desc={overview} />
                <VideoTitle movieId={id} />
                <SecondaryContainer />
            </div>
        </>
    );
};

export default MainPage;
