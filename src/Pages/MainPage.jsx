import { useSelector } from "react-redux";
import HeaderSignUp from "../Components/Header";
import { useMovieList } from "../hooks/useMovieList";
import MainContainer from "./MainContainer";

const MainPage = () => {

    const user = useSelector((state) => state.user.user);


    useMovieList();



    return (
        <>
            <div>
                <HeaderSignUp />
            </div>
            <div>
                <MainContainer />
            </div>
        </>
    );
};

export default MainPage;
