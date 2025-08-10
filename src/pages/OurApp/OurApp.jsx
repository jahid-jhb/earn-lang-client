import React from 'react';
import { FaArrowLeft, FaHome } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';

const OurApp = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col justify-center items-center bg-base-100 text-center px-4">
                {/* <h1 className="text-6xl font-bold text-info">404</h1>
                <h2 className="text-2xl mt-4 text-base-content">Oops! Page Not Found</h2> */}
                <p className="mt-2 text-gray-500 max-w-md">
                    We are currently building our app... <br />
                    So we sincerely apologize for the temporary inconvenience.
                </p>
                <div className='flex gap-2'>
                    <button onClick={() => navigate(-1)} className="mt-6 btn bg-gray-400 gap-2">
                        <FaArrowLeft />
                        Go Back
                    </button>
                    <Link to="/" className="mt-6">
                        <button className="btn bg-gray-400 gap-2">
                            <FaHome />
                            Go Home
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default OurApp;
