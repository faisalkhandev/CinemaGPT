/* eslint-disable react/prop-types */
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const VideoContainer = (props) => {
    const { title, desc } = props


    return (
        <div className="absolute top-2/4 bg-gradient-to-r from-gray-600 p-10 w-8/12">
            <h1 className="text-white font-bold text-[30px]">{title}</h1>
            <p className="text-white font-medium mt-2 w-7/12 text-justify ">{desc}</p>

            <div className="flex mt-8" >
                <span>
                    <button className="flex items-center p-3 px-10 bg-white text-black hover:bg-slate-300 rounded-md font-bold">
                        <FaPlay className="mr-2" /> Play
                    </button>
                </span>
                <span>
                    <button className="flex items-center p-3 px-10 bg-gray-500 text-white rounded-md font-bold ml-4">
                        <FaInfoCircle className="mr-2" /> More Info
                    </button>
                </span>
            </div>
        </div>
    )
}

export default VideoContainer
