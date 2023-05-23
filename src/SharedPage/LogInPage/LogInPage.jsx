import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
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

    // const handleGoogleSignIn = () => {
    //     signInWithGoogle()
    //         .then(result => {
    //             console.log(result);
    //             toast.success("SuccessFully SignIn with your Google Account", { autoClose: 500 })
    //             nevigate(from, { replace: true });
    //         })
    //         .catch(error => {
    //             toast.error("Something is Fishy, Please check your Email & SignIn again", { autoClose: 500 })
    //         })
    // }
    return (
        <div >
            <div className='container register-page mx-auto bg-gray-100 text-gray-600 text-center py-5 my-5 rounded'>
                <form onSubmit={handleLogin} className="login-panel">
                    <div className="left-side sm:hidded"></div>
                    <div className="right-side">
                        <h1>Log In</h1>
                        <p>Log In and get exciting Toys</p>
                        <input type="email" name="email" placeholder='Email' required />
                        <input type="password" name="password" placeholder='Password' required />
                        <input type="submit" value="let's go" className="submit-btn" />
                    </div>
                </form>
                <FaGoogle></FaGoogle>
            </div>
        </div>
    );
};

export default LogInPage;