/* eslint-disable react/prop-types */

import { IMG_URL } from "../utils/constant"

const MovieList = ({ title, movies }) => {



    return (
        <>
            <div className="px-6">
                <h1 className="px-4 text-2xl font-bold mt-4 text-white">{title}</h1>
                <div className="flex overflow-x-auto no-scrollbar space-x-4 py-4 ">
                    {
                        movies?.map((movie) => {
                            return (
                                <div key={movie?.id} className="w-36 md:w-48 flex-shrink-0">
                                    <img src={IMG_URL + movie?.poster_path} alt={movie?.original_title} className="w-full" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default MovieList