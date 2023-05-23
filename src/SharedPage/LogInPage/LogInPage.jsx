import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { usePageTitle } from '../../CustomHook/usePageTitle';
import { FaGoogle } from "react-icons/fa";

const LogInPage = () => {

    usePageTitle("ToyToPia")

    const { login, signInWithGoogle, loading } = useContext(AuthContext)


    const nevigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email, password)
            .then(result => {
                toast.success("You are successFully Loged In", { autoClose: 500 })
                console.log(result);
                swal("Good job!", "Welcome back!", "success", {
                    button: "Aww yiss!",
                });
                nevigate(from, { replace: true });


            })
            .catch(error => {
                console.log(error)
                toast.error("Something is missing, Please check your email & password")
            })
        // form.reset()
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result);
                toast.success("SuccessFully SignIn with your Google Account", { autoClose: 500 })
                nevigate(from, { replace: true });
            })
            .catch(error => {
                toast.error("Something is Fishy, Please check your Email & SignIn again", { autoClose: 500 })
            })
    }
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">Log In Page</h1>

            <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <form onSubmit={handleLogin} className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-1 font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder='Email'
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-1 font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder='Password'
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            required />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full mb-4"
                    >
                        Log in
                    </button>
                </form>
                <div className="divider">OR</div>
                <p className='text-center'>New to ToyToPia? Please <Link to="/register" className='link'>Register</Link></p>
                <div className="divider">OR</div>
                <div className='text-center'>
                    <button
                        onClick={handleGoogleSignIn}
                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full"
                    >
                        Sign in with Google
                    </button>
                </div>
            </div>

        </div>
    );
};

export default LogInPage;