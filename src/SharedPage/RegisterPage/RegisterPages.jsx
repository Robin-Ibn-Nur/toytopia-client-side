import React, { useContext } from 'react';
import "./RegisterPage.css"
import { AuthContext } from '../../AuthProvider/AuthProvider';
import swal from 'sweetalert';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const RegisterPages = () => {

    const { creatNewUser, upDateUserProfile } = useContext(AuthContext);

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
                // nevigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
                toast.error("SignUp Fail!", { autoClose: 500 })
            })
        form.reset()
    }
    return (
        <div className='container register-page mx-auto bg-gray-100 text-gray-600 text-center py-5 my-5 rounded'>
            <form onSubmit={handleRegister} className="login-panel">
                <div className="left-side sm:hidded"></div>
                <div className="right-side">
                    <h1>Register</h1>
                    <p>Register and get a free pressent</p>
                    <input type="text" name='name' placeholder='Name' />
                    <input type="email" name="email" placeholder='Email' required />
                    <input type="password" name="password" placeholder='Password' required />
                    <input type="url" name="photo" placeholder='PhotoUrl' required />
                    <input type="submit" value="let's go" className="submit-btn" />
                </div>
            </form>
        </div>
    );
};

export default RegisterPages;