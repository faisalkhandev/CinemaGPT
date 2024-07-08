/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useGetData } from "../hooks/useMovieList";

const VideoTitle = (props) => {
    const [trailer, setTrailer] = useState([]);
    const { movieId } = props;  // Ensure you pass title and desc as props

    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
    const { data: trailorData } = useGetData(url);

    useEffect(() => {
        if (trailorData && trailorData.results) {
            const filterTrailor = trailorData.results.filter(
                (trailor) => trailor.type === "Trailer"
            );
            console.log("filterTrailor::", filterTrailor)
            const selectedTrailer = filterTrailor.length > 0 ? filterTrailor[0] : trailorData.results[0];
            setTrailer(selectedTrailer);
        }
    }, [trailorData]);

    return (
        <div className="relative w-full">
            {trailer ? (
                <iframe
                    className="w-full aspect-video"
                    src={`https://www.youtube.com/embed/${trailer.key}?&autoplay=1&mute=1`}
                    title={trailer.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            ) : (
                "Loading..."
            )}
        </div>
    );
};

export default VideoTitle;
