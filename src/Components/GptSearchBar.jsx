import { useRef } from "react";

const GptSearchBar = () => {
    const searchText = useRef(null);

    function handleGptSearchBtn() {

        console.log(searchText.current.value);


    }

    return (
        <>
            <div className="flex justify-center pt-[35%] md:pt-[10%]">
                <form
                    className="w-full max-w-md flex"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        className="p-4 rounded font-semibold w-10/12"
                        type="text"
                        placeholder="What would you like to watch? 🎬"
                        ref={searchText}
                    />
                    <button
                        className="p-4 bg-slate-700 text-white font-bold w-1/4"
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
