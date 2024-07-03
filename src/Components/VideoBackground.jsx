/* eslint-disable react/prop-types */
import { useGetData } from "../hooks/useMovieList"

const VideoTitle = (props) => {

    const { movieId } = props
    console.log("props;::", props)

    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos`

    const videoAPI = useGetData(url)

    console.log("videoAPI::", videoAPI)


    return (
        <div>
            videoBackground
        </div>
    )
}

export default VideoTitle
