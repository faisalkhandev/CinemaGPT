import { useRef } from "react";
import openai from "../utils/openai";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../Redux/gptSlice";

const GptSearchBar = () => {
    const searchText = useRef(null);
    const dispatch = useDispatch();

    async function searchMovies(movie) {
        const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`
        try {

            const data = await fetch(url, options)
            const json = await data.json();

            return json.results


        } catch (error) {
            console.log("searchAPI having issues")
        }
    }


    async function handleGptSearchBtn() {

        console.log(searchText.current.value);

        const gptQuery = "act as a movie recommendation system, suggest some movies for the query: " + searchText.current.value + ". only give me 5 names of the movies, comma separated like the example given ahead. Example Result: Hope, Goalmaal, Sholay, Don, Heera Peere"

        try {
            const gptResults = await openai.chat.completions.create({
                messages: [{ role: 'user', content: gptQuery }],
                model: 'gpt-3.5-turbo',
            });
            console.log("queryResponse::", gptResults)

            console.log("gptMovies::", gptResults?.choices?.[0]?.message?.content)

            const gptMovies = gptResults?.choices?.[0]?.message?.content.split(",")

            //gptMovies = [Andaaz Apna, GoalMaal, Heera Peere, Jhonny]

            console.log("gptMoviesSplit ,::", gptMovies)

            const promiseArray = gptMovies.map((movie) => searchMovies(movie));

            //promiseArr = [promise, promise, promise, promise]
            // we will use Promise.all() to resolve all the promises 

            console.log("promiseArray:::", promiseArray)

            const allMoviesResult = await Promise.all(promiseArray)

            console.log("promise resolved and final result", allMoviesResult)


            //write this part in the book. 
            const filteredMovies = allMoviesResult.map(movies =>
                Array.isArray(movies) ? movies.filter(movie =>
                    movie.original_language === 'en' ||
                    movie.original_language === 'hi' ||
                    movie.original_language === 'ur'
                ) : []
            );

            console.log("Filtered Movies by language::", filteredMovies)

            dispatch(addGptMovies({ moviesName: gptMovies, gptMovies: filteredMovies }));

        } catch (error) {
            console.log("error::", error)
        }

    }



    return (
        <>
            <div className="flex justify-center pt-[35%] md:pt-[10%]">
                <form
                    className="w-full max-w-md flex bg-slate-800 p-4 rounded"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        className="p-4 rounded font-semibold w-10/12"
                        type="text"
                        placeholder="What would you like to watch? 🎬"
                        ref={searchText}
                    />
                    <button
                        className="p-4 bg-black text-white font-bold w-1/4"
                        onClick={handleGptSearchBtn}
                    >
                        Search
                    </button>
                </form>
            </div>
        </>
    );
};

export default GptSearchBar;
