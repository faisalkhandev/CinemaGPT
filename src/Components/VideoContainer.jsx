/* eslint-disable react/prop-types */
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const VideoContainer = (props) => {
    const { title, desc } = props


    return (
        <div className="mt-40 mx-16">
            <h1 className="text-slate-700 font-bold text-[30px]">{title}</h1>
            <p className="text-slate-700 font-medium mt-2 w-6/12 text-justify ">{desc}</p>

            <div className="flex mt-8" >
                <span>
                    <button className="flex items-center p-3 px-10 bg-gray-500 text-white rounded-md font-bold">
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
