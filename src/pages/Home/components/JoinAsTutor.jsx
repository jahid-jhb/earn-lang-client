import React from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../../contexts/AuthContext';

const JoinAsTutor = () => {

    const {user} = useAuth();
    const navigate = useNavigate();

    const handleJoin = () => {

        user ? navigate('/add-tutorials') : navigate('/register');
    };

    return (
        <section className="max-w-6xl mx-auto px-4 py-16 bg-base-200  rounded-lg  text-center my-10">
            <h2 className="text-3xl font-bold mb-4">Become a Tutor with Us</h2>
            <p className="mb-6 max-w-2xl mx-auto">
                Share your knowledge with students around the world and help them achieve their language goals. Join our community of experienced and verified tutors today.
            </p>
            <button
                onClick={handleJoin}
                className="btn btn-outline text-cyan-700 hover:bg-cyan-700 hover:text-white font-semibold px-6"
            >
                Join as a Tutor
            </button>
        </section>
    );
};

export default JoinAsTutor;
