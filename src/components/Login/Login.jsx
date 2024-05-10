import { Helmet } from "react-helmet";
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";


const Login = () => {
    const { login, googleLogin, githubLogin } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate()
    const location = useLocation();

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        login(email, password)
            .then(result => {
                console.log(result.user)
                if (result.user) {
                    Swal.fire({
                        title: "Success!",
                        text: "Login successfully!",
                        icon: "success"
                    });
                }

                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })
    }


    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result)
                if (result.user) {
                    Swal.fire({
                        title: "Success!",
                        text: "Login successfully!",
                        icon: "success"
                    });
                }
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                console.log(result)
                if (result.user) {
                    Swal.fire({
                        title: "Success!",
                        text: "Login successfully!",
                        icon: "success"
                    });
                }
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="min-h-screen"> 
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div  className="w-4/5 lg:w-1/3 md:w-2/3 mx-auto bg-gray-100 shadow-xl p-5 rounded-lg my-20">
                <h2 className="text-2xl font-bold text-center text-red-500 my-3">LogIn Your Account</h2>
                <form onSubmit={handleLogin}>


                    <p>Email</p>
                    <input className="border-2 rounded-md w-full px-4 py-2 mb-2" type="email" name="email" placeholder="Email" id="email" required />

                    <p>Password</p>
                    <div className="relative">
                        <input className="border-2 rounded-md w-full px-4 py-2 mb-2" type={showPassword ? "text" : "password"} name="password" placeholder="Password" id="password" required />
                        <span className="absolute top-1/4 right-3" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>}
                        </span>
                    </div>

                    <input className=" rounded-md hover:bg-red-400 bg-red-500 w-full px-4 py-2 text-center font-bold text-lg text-white my-3" type="submit" value="Login" />
                </form>

                <p>Do not have an account ? <Link to='/register' className="text-red-500 font-bold underline">please Register</Link></p>

                <div className="divider my-5"></div>
                <div className="mb-t flex justify-center gap-10">
                    <div>
                        <button onClick={handleGoogleLogin} className=" text-2xl bg-gray-200 p-3 rounded-2xl"><FaGoogle></FaGoogle></button>
                        <p>Google</p>
                    </div>
                    <div>
                        <button
                            onClick={handleGithubLogin}
                            className="  text-2xl bg-gray-200 p-3 rounded-2xl"> <FaGithub></FaGithub></button>
                        <p>Github</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;