/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useGetData } from "../hooks/useMovieList";

const VideoTitle = (props) => {
    const [trailer, setTrailer] = useState([]);
    const { movieId } = props;

    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
    const { data: trailorData } = useGetData(url);

    useEffect(() => {
        if (trailorData && trailorData.results) {
            const filterTrailor = trailorData.results.filter(
                (trailor) => trailor.type === "Trailer"
            );
            const selectedTrailer = filterTrailor.length > 0 ? filterTrailor[0] : trailorData.results[0];
            setTrailer(selectedTrailer);
        }
    }, [trailorData]);

    console.log("videoMovies::", trailorData);
    console.log("filterTrailor", trailer);
    console.log("tailorfinall:::", trailer);

    return (
        <div className="w-screen h-screen ">
            {trailer ? (
                <iframe
                    src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&showinfo=0`}
                    title={trailer.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                    allowFullScreen
                    className="w-screen aspect-video"
                ></iframe>
            ) : (
                "Loading..."
            )}
        </div>
    );
};

export default VideoTitle;
