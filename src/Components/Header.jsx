import { FaRegUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { removeUser } from "../Redux/userSlice";
import { getAuth, signOut } from "firebase/auth";

const HeaderSignUp = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.user.user)


    function handleLogout() {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {

        });

        dispatch(removeUser())
        navigate("/")
    }

    return (
        <>

            <div className="w-full bg-black z-20 flex justify-between items-center align-middle">
                <img
                    className="mx-4 z-10 bg-slate-400 bg-opacity-30"
                    src="https://i.postimg.cc/jjrR94Sj/Cinema-GPTlogo.png"
                    alt="CinemaGPT_Logo"
                    width="22%"
                    height="22%"
                />
                <div className="flex align-middle items-center ">
                    <FaRegUser className="mt-1 mx-3 text-[30px] text-white " />
                    <p className="font-bold text-white">{selector?.[0]?.displayName || "Default"} </p>
                    <button type="button" className="mx-2 bg-white rounded-sm p-3 text-black font-bold" onClick={handleLogout}>{!selector ? "Login" : "Logout"}</button>

                </div>

            </div>


        </>
    );
};

export default HeaderSignUp;
