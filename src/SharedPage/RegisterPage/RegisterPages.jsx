import React, { useContext } from 'react';
import "./RegisterPage.css"
import { AuthContext } from '../../AuthProvider/AuthProvider';
import swal from 'sweetalert';

const RegisterPages = () => {

    const { creatNewUser, upDateUserProfile } = useContext(AuthContext);

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
            })
            .catch(error => {
                console.log(error)
            })

        // creatUser(email, password)
        //     .then(result => {
        //         const user = result.user;
        //         console.log(user);
        //         upDateUserData(name, photoUrl)
        //             .then(() => { })
        //             .catch(error => {
        //                 console.log(error);
        //             })
        //         setError('')
        //         toast.success(`SuccessFully SignUp ${name}`, { autoClose: 500 })
        //         nevigate(from, { replace: true });
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         toast.error("SignUp Fail!", { autoClose: 500 })
        //     })
        // form.reset()
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