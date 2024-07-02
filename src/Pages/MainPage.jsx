import { useEffect } from "react";
import { useSelector } from "react-redux";
import HeaderSignUp from "../Components/Header";
import { useMovieList } from "../hooks/useMovieList";
import { VideoContainer, VideoTitle } from "../Components";

const MainPage = () => {
    //Movies API calling
    useMovieList();

    const movies = useSelector((state) => state.movies?.moviesList);

    useEffect(() => {
        if (movies && movies.length > 0) {
            console.log("movies::", movies);
        }
    }, [movies]);

    if (!movies || movies.length === 0) {
        return null;
    }

    const { original_title, overview } = movies?.[0] || [];


    return (
        <>
            <div>
                <HeaderSignUp />
            </div>
            <div>
                <VideoContainer title={original_title} desc={overview} />
                <VideoTitle />
            </div>
        </>
    );
};

export default MainPage;
