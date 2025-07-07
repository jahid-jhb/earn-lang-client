import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../../contexts/AuthContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const Register = () => {

    const [showPass, setShowPass] = useState(false);

    const { googleSignIn, register, location } = useAuth();

    const navigate = useNavigate();


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                // success alert
                Swal.fire({
                    title: "Login Successful !",
                    icon: "success",
                    timer: 4000,
                    draggable: true
                });

                location ? navigate(location) : navigate('/');

            }).catch(error => {
                // error alert
                Swal.fire({
                    title: "Something Went Wrong ! <br> Please Try Again...",
                    icon: "error",
                    timer: 4000,
                    draggable: true
                });
            });
    };



    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        register(name, email, photoURL, password)
            .then(result => {
                e.target.reset();
                // success alert
                Swal.fire({
                    title: "Register Successful !",
                    icon: "success",
                    timer: 4000,
                    draggable: true
                });

                location ? navigate(location) : navigate('/');

            }).catch(error => {
                // error alert
                Swal.fire({
                    title: "Something Went Wrong ! <br> Please Try Again...",
                    icon: "error",
                    timer: 4000,
                    draggable: true
                });
            });

        // console.log(` ${name} \n ${photoURL} \n ${email} \n ${password}`);
    }

    return (
        <div className='flex flex-col max-w-sm mx-auto'>

            {/* google login */}
            <button onClick={handleGoogleSignIn} className="btn bg-base-300 shadow-2xs">
                <FcGoogle />
                Login with Google
            </button>

            <h4 className='text-2xl font-bold my-3 text-center divider'>Or</h4>


            {/* email password register form */}
            <div className="card bg-base-300 w-full shrink-0 shadow-2xl">
                <div className="card-body">

                    <h3 className='text-3xl font-bold mb-5'>Register now!</h3>

                    <form onSubmit={handleRegister} className="fieldset">

                        {/* name input field */}
                        <label className="input validator">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </g>
                            </svg>
                            <input
                                type="text"
                                required
                                name='name'
                                placeholder="Full Name"
                            // pattern="[A-Za-z][A-Za-z0-9\-]*"
                            // minlength="3"
                            // maxlength="30"
                            // title="Only letters, numbers or dash"
                            />
                        </label>
                        {/* <p className="validator-hint">
                            Must be 3 to 30 characters
                            <br />containing only letters, numbers or dash
                        </p> */}


                        {/* photoURL input field */}
                        <label className="input validator mt-4">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                </g>
                            </svg>
                            <input
                                type="url"
                                required
                                name='photoURL'
                                placeholder="photoURL"
                                // value="https://"
                                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                                title="Must be valid URL"
                            />
                        </label>
                        {/* <p className="validator-hint">Must be valid URL</p> */}


                        {/* email input field */}
                        <label className="input validator mt-4">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </g>
                            </svg>
                            <input
                                type="email"
                                name='email'
                                placeholder="mail@site.com"
                                required />
                        </label>
                        <div className="validator-hint hidden">Enter valid email address</div>


                        {/* password input field */}
                        <label className="input validator mt-4">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                    ></path>
                                    <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                </g>
                            </svg>
                            <input
                                type={showPass ? "text" : "password"}
                                required
                                name='password'
                                placeholder="Password"
                                minLength="6"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
                            />
                            {/* show pass or hide pass */}
                            <span onClick={() => setShowPass(!showPass)} className='-ml-6 z-10 cursor-pointer'>
                                {
                                    showPass ?
                                        <FaRegEyeSlash size={16} color='gray' /> :
                                        <FaRegEye size={16} color='gray' />
                                }
                            </span>

                        </label>
                        <p className="validator-hint hidden">
                            Must be more than 6 characters, including
                            <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                        </p>

                        {/* register button */}
                        <button type='submit' className="btn bg-black/25 mt-4">Register</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Register;
