import { FaRegUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { removeUser } from "../Redux/userSlice";
import { getAuth, signOut } from "firebase/auth";
import { showGptView } from "../Redux/gptSlice";

const HeaderSignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    function handleLogout() {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                console.log(error);
            });

        dispatch(removeUser());
        navigate("/");
    }
    function handleSearchBtn() {
        dispatch(showGptView())

    }

    return (
        <>
            <div className="w-full bg-black z-20 flex justify-between items-center align-middle">
                <img
                    className="mx-4 z-10"
                    src="https://i.postimg.cc/jjrR94Sj/Cinema-GPTlogo.png"
                    alt="CinemaGPT_Logo"
                    width="22%"
                    height="22%"
                />
                {
                    user &&
                    <div className="flex align-middle items-center ">
                        <button className="bg-white text-black p-3 font-bold rounded" onClick={handleSearchBtn}>Search</button>
                        <FaRegUser className="mt-1 mx-3 text-[30px] text-white " />
                        <p className="font-bold text-white">
                            {user?.[0]?.displayName || "Default"}{" "}
                        </p>
                        <button
                            type="button"
                            className="mx-2 bg-white rounded-sm p-3 text-black font-bold"
                            onClick={handleLogout}
                        >
                            {!user ? "Login" : "Logout"}
                        </button>
                    </div>
                }
            </div>
        </>
    );
};

export default HeaderSignUp;
