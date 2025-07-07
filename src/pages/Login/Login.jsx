import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {

    const [showPass, setShowPass] = useState(false);

    const { googleSignIn, login, setLocation } = useAuth();

    const location = useLocation();

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

                location.state ? navigate(location.state) : navigate('/');

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


    const handleLogIn = (e) => {
        // 
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        login(email, password)
            .then(result => {
                e.target.reset();
                // success alert
                Swal.fire({
                    title: "Login Successful !",
                    icon: "success",
                    timer: 4000,
                    draggable: true
                });

                location.state ? navigate(location.state) : navigate('/');
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


    return (
        <div className='flex flex-col max-w-sm mx-auto'>


            {/* google login */}
            <button onClick={handleGoogleSignIn} className="btn bg-base-300 shadow-2xs">
                <FcGoogle />
                Login with Google
            </button>

            <h4 className='text-2xl font-bold my-3 text-center divider'>Or</h4>


            {/* email password login Form */}
            <div className="card bg-base-300 w-full shrink-0 shadow-2xl">
                <div className="card-body">

                    <h3 className='text-3xl font-bold mb-5'>Login now!</h3>

                    <form onSubmit={handleLogIn} className="fieldset">

                        {/* email input field */}
                        <label className="input validator">
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


                        {/* forgot password link */}
                        <div><a className="link link-hover">Forgot password?</a></div>

                        {/* login button */}
                        <button type='submit' className="btn bg-black/25 mt-4">Login</button>
                    </form>

                    <p className='mt-4 text-center'>Don't have an account?{' '}
                        <Link 
                        to='/register' 
                        onClick={ () => setLocation(location.state)} 
                        className='text-primary underline'>
                            Register
                        </Link>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Login;
