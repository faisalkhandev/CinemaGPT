import { SignUpHeader } from "../Components"

const SignUp = () => {
    return (
        <div>
            <SignUpHeader />
            <div className="mainBox object-contain flex justify-center align-middle ">

                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/1fd8c6d0-20db-4667-860e-dd1ad7353ac0/0a95d6aa-8987-4893-bc7c-db312ef24a95/PK-en-20240624-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="wallpaper" />

                <div className="signupForm absolute mt-24 p-10 bg-slate-500">
                    <form action="" className="flex flex-col">
                        <input type="email" name="email" id="" placeholder="Enter your email" />
                        <input type="password" name="email" id="" placeholder="Enter your password" />
                        <button className="bg-slate-700 text-white p-2 rounded-sm">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
