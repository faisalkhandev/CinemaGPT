import { SignUpHeader } from "../Components";
import { useState } from "react";

const SignUp = () => {
    const [isSingIn, setIsSignIn] = useState(true);

    function handleSignin() {
        setIsSignIn(!isSingIn);
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

                    <form action="" className="flex flex-col">

                        {!isSingIn &&
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="mb-4 p-2 rounded-md"
                            />}

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="mb-4 p-2 rounded-md"
                        />
                        <input
                            type="password"
                            name="email"
                            placeholder="Enter your password"
                            className="mb-4 p-2 rounded-md"
                        />

                        <button className="bg-red-600 text-white p-2 rounded-md">
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
                                )}{" "}
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
