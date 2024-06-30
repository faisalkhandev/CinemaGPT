import { useDispatch, useSelector } from "react-redux";
import HeaderSignUp from "../Components/Header";
import { movieAPI } from "../utils/constant";
import { useEffect } from "react";
import { setMoviesList } from "../Redux/movieSlice";

const MainPage = () => {

    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch()

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjUzM2QyY2RjMmU4OTBkYTA5ODYwMzM2MTJkYjE1NSIsIm5iZiI6MTcxOTc1MTMwMS4yODUwNDEsInN1YiI6IjY0ZWRjYTkxNTI1OGFlMDBhZGQ2Mjc2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wolf7BCpqNsAWeGqXci20FAr0msT1_PiFNcG3CresYE'
        }
    };

    async function getMoviesList() {

        try {

            const data = await fetch(movieAPI, options)
            const json = await data.json();
            console.log("Movies::", json.results)
            dispatch(setMoviesList(json.results))
        }
        catch (error) {
            console.log("errorMovies::", error)
        }

    }

    useEffect(() => {
        getMoviesList();
    }, [])


    return (
        <>
            <div>
                <HeaderSignUp />
            </div>
            <div className="flex justify-center items-center">
                <p className="text-center font-bold">Welcome {user?.[0]?.displayName}</p>
            </div>
        </>
    );
};

export default MainPage;
