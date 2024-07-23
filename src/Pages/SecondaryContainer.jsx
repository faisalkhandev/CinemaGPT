import { useSelector } from "react-redux";
import { useNowPlayingMovie } from "../hooks/useNowPlayingMovie"
import { MovieList } from "../Components";

const SecondaryContainer = () => {
    useNowPlayingMovie();
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMov)
    const Popular = useSelector((store) => store.movies.moviesList)
    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies)


    return (
        <div className="bg-black">

            <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">

                <MovieList title="Top Rated Movies" movies={topRatedMovies} />
                <MovieList title="Popular Movies" movies={Popular} />
                <MovieList title="Playing Movies" movies={nowPlayingMovies} />

            </div>
        </div>
    )
}

export default SecondaryContainer
