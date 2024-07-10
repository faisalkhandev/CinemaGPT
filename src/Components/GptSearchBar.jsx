const GptSearchBar = () => {
    return (
        <>
            <div className="flex justify-center pt-[35%] md:pt-[10%]">
                <form className="w-full max-w-md flex">
                    <input className="p-4 rounded font-semibold w-10/12" type="text" placeholder="What would you like to watch? 🎬" />
                    <button className="p-4 bg-slate-700 text-white font-bold w-1/4" >Search</button>
                </form>
            </div>
        </>
    )
}

export default GptSearchBar
