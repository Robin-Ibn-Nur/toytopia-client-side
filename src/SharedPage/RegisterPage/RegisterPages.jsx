import React, { useContext} from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import swal from 'sweetalert';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { usePageTitle } from '../../CustomHook/usePageTitle';

const RegisterPages = () => {

    usePageTitle("ToyToPia")

    const { creatNewUser, upDateUserProfile, signInWithGoogle } = useContext(AuthContext);

    const nevigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photo.value;
        console.log(name, email, password, photoUrl);

        creatNewUser(email, password)
            .then(result => {
                console.log(result.user)
                upDateUserProfile(name, photoUrl)
                    .then(() => { })
                    .catch(error => {
                        console.log(error);
                    })
                swal("Good job!", "You have successfully register!", "success");
                nevigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
                toast.error("SignUp Fail!", { autoClose: 500 })
            })
        form.reset()
    }

    const handleGoogleSignUp = () => {
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
            <h1 className="text-2xl font-bold mb-4">Registration Page</h1>

            <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <form onSubmit={handleRegister} className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-1 font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            name='name'
                            placeholder='Name'
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                    </div>

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

                    <div className="mb-4">
                        <label htmlFor="photoURL" className="block mb-1 font-medium">
                            Photo URL
                        </label>
                        <input
                            type="url"
                            name="photo"
                            placeholder='PhotoUrl'
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            required />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full mb-4"
                    >
                        Register
                    </button>
                </form>
                <div className="divider">OR</div>
                <p className='text-center'>Already have an account Please <Link to="/login" className='link'>Log In</Link></p>
                <div className="divider">OR</div>
                <div className='text-center'>
                    <button
                        onClick={handleGoogleSignUp}
                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full"
                    >
                        Sign up with Google
                    </button>
                </div>
            </div>

        </div>
    );
};

export default RegisterPages;