import { GptMovieSuggestion, GptSearchBar } from "../Components"
import { BG_IMG_URL } from "../utils/constant"

const GptSearchPage = () => {
    return (
        <>
            <div>

                <div className="absolute -z-10">
                    <img src={BG_IMG_URL} className="" />
                </div>

                <GptSearchBar />
                <GptMovieSuggestion />

            </div>
        </>
    )
}

export default GptSearchPage
