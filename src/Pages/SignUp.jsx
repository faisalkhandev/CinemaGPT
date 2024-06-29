import { SignUpHeader } from "../Components";
import { useRef, useState } from "react";
import { Validation } from "../utils/Validations";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const SignUp = () => {
    //states
    const [isSingIn, setIsSignIn] = useState(true);
    const [errMsg, setErrMsg] = useState("")

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    //functions
    function handleSignin() {
        setIsSignIn(!isSingIn);
    }

    function handleButton(e) {
        e.preventDefault();
        console.log("email", email?.current?.value)
        console.log("password", password?.current?.value)
        console.log("name", name?.current?.value)

        const errMsg = Validation(name?.current?.value, email?.current?.value, password?.current?.value,)
        setErrMsg(errMsg)
        console.log("errMsg::", errMsg)

        if (errMsg) return;

        if (!isSingIn) {
            auth
            createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log("userSignup", user)

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
                    console.log("singIn::", user)
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
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/1fd8c6d0-20db-4667-860e-dd1ad7353ac0/0a95d6aa-8987-4893-bc7c-db312ef24a95/PK-en-20240624-popsignuptwoweeks-perspective_alpha_website_large.jpg"
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
                                placeholder="Enter your full name"
                                className="mb-4 p-2 rounded-md"
                                ref={name}
                            />}

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="mb-4 p-2 rounded-md"
                            ref={email}
                        />

                        <input
                            type="password"
                            name="email"
                            placeholder="Enter your password"
                            className="mb-4 p-2 rounded-md"
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
