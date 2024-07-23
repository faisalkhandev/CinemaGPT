import { SignUpHeader } from "../Components";
import { useRef, useState } from "react";
import { Validation } from "../utils/Validations";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/userSlice";
import { BG_IMG_URL } from "../utils/constant";


const SignUp = () => {
    //states
    const [isSingIn, setIsSignIn] = useState(true);
    const [errMsg, setErrMsg] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const nameRef = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    //functions
    function handleSignin() {
        setIsSignIn(!isSingIn);
    }

    function handleButton(e) {
        e.preventDefault();


        const errMsg = Validation(nameRef?.current?.value, email?.current?.value, password?.current?.value,)
        setErrMsg(errMsg)
        console.log("errMsg::", errMsg)

        if (errMsg) return;

        if (!isSingIn) {
            auth
            createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    updateProfile(user, {
                        displayName: nameRef.current?.value,
                        photoURL: "https://example.com/jane-q-user/profile.jpg"
                    })
                        .then(() => {
                            const { uid, displayName, email, photoURL } = auth.currentUser;
                            dispatch(addUser({ uid, displayName, email, photoURL }))

                            navigate("/browser");
                        })


                    navigate("/browser")

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMsg(errorCode + " " + errorMessage)
                });
        }
        else {

            auth
            signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    const { uid, displayName, email, photoURL } = user;
                    dispatch(addUser({ uid, displayName, email, photoURL }))
                    navigate("/browser")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMsg(errorCode + " " + errorMessage)
                });
        }



    }




    return (
        <div>
            <SignUpHeader />
            <div className="mainBox flex justify-center items-center h-screen">
                <img
                    src={BG_IMG_URL}
                    alt="wallpaper"
                    className="absolute inset-0 object-cover w-full h-full"
                />
                <div className="signupForm p-16 bg-black bg-opacity-50 rounded-md z-10 w-3/12">
                    <h1 className="mb-2 font-[700] text-white text-[32px]">
                        {isSingIn ? "Sign In" : "Sign Up"}
                    </h1>

                    <form className="flex flex-col" onSubmit={handleButton}>

                        {!isSingIn &&
                            <input
                                type="text"
                                placeholder="Enter your full nameRef"
                                className="mb-4 p-2 rounded-md  bg-slate-600 text-white focus:border-white focus:ring-0"
                                ref={nameRef}
                            />}

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="mb-4 p-2 rounded-md bg-slate-600 text-white focus:border-white focus:ring-0"
                            ref={email}
                        />

                        <input
                            type="password"
                            name="email"
                            placeholder="Enter your password"
                            className="mb-4 p-2 rounded-md  bg-slate-600 text-white focus:border-white focus:ring-0"
                            ref={password}
                        />
                        {
                            errMsg && <p className="mb-2 text-red-400 font-bold">{errMsg}</p>
                        }

                        <button className="bg-red-600 text-white p-2 rounded-md"
                            type="submit"

                        >
                            {isSingIn ? "Sign In" : "Sign Up"}
                        </button>

                        <p className="mt-3 font-normal text-center text-gray-300 cursor-pointer">
                            Forgot Password
                        </p>

                        <span className="flex align-middle mt-4">
                            <input
                                type="checkbox"
                                name="rememberme"
                                id="checkbox"
                                className="w-5 border-black"
                            />{" "}
                            <span className="text-white mx-2"> Remember Me</span>
                        </span>

                        <div className="flex items-center cursor-pointer">
                            <p className="text-gray-400 mt-4" onClick={handleSignin}>
                                {isSingIn ? (
                                    <>
                                        New to the CinemaGPT? <b className="text-white">Sign Up</b>
                                    </>
                                ) : (
                                    <>
                                        Already Memeber? <b className="text-white">Sign in</b>
                                    </>
                                )}
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
