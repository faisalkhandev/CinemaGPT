import { useSelector } from "react-redux";
import { useNowPlayingMovie } from "../hooks/useNowPlayingMovie"

const SecondaryContainer = () => {
    useNowPlayingMovie();
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMov)
    console.log("nowPlayingSecondary::", nowPlayingMovies)
    return (
        <div>
            MovieList
        </div>
    )
}

export default SecondaryContainer
