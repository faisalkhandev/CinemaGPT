import { useSelector } from "react-redux"
import MovieList from "./movieList"

const GptMovieSuggestion = () => {

    const { moviesName, gptMovies } = useSelector(store => store.gpt)
    if (!moviesName) return null;

    return (
        <div className="p-4 text-white bg-black">
            {
                moviesName.map((moviesName, index) => (
                    <MovieList key={moviesName} title={moviesName} movies={gptMovies[index]} />
                ))
            }
        </div>
    )
}

export default GptMovieSuggestion
