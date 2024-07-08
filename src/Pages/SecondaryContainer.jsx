import { useSelector } from "react-redux";
import { useNowPlayingMovie } from "../hooks/useNowPlayingMovie"
import { MovieList } from "../Components";

const SecondaryContainer = () => {
    useNowPlayingMovie();
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMov)
    console.log("nowPlayingSecondary::", nowPlayingMovies)
    return (
        <div className="bg-black">

            <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">

                <MovieList title="Now Playing" movies={nowPlayingMovies} />
                <MovieList title="Trending Movies" movies={nowPlayingMovies} />
                <MovieList title="Popular Movies" movies={nowPlayingMovies} />

            </div>
        </div>
    )
}

export default SecondaryContainer
