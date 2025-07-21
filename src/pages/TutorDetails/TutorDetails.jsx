import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import api from '../../services/api';
import Swal from 'sweetalert2';
import Loading from '../../components/common/Loading';

const TutorDetails = () => {

    const { details } = useParams(); // tutor _id
    const [tutor, setTutor] = useState(null);
    const [booked, setBooked] = useState(null);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();
    const navigate = useNavigate();

    // Fetch single tutor by ID
    useEffect(() => {
        const fetchTutor = async () => {
            try {
                const res = await api.get(`/tutors/${details}`);
                setTutor(res.data);

                
                const bookedRes = await api.get(`/booked-tutors/${details}`, {
                    params: {
                        email: user.email
                    }
                });
                if (bookedRes.data.email === user.email) {
                    setBooked(bookedRes.data);
                }
                
                setLoading(false);


            } catch (err) {
                console.error('Error fetching tutor:', err);
                setLoading(false);
            }
        };

        fetchTutor();
    }, [details, user]);

    const handleBook = async () => {
        if (!user) {
            navigate('/login');
            return;
        }

        if (booked) {
            return;
        }

        const bookingData = {
            tutorId: tutor._id,
            name: tutor.name,
            image: tutor.image,
            language: tutor.language,
            price: tutor.price,
            tutorEmail: tutor.email, // make sure your tutor docs store the tutor's email
            email: user.email, // logged-in user
        };


        try {
            const res = await api.post('/bookings', bookingData);
            if (res.data.insertedId) {
                // alert('Booking successful!');
                setBooked(bookingData);
                Swal.fire({
                    title: "Booking successful!",
                    icon: "success",
                    timer: 4000
                });
            } else {
                // alert('Failed to book tutor.');
                Swal.fire({
                    title: "Something Went Wrong ! <br> Please Try Again...",
                    icon: "error",
                    timer: 4000
                });
            }
        } catch (err) {
            console.error('Booking error:', err);
        }
    };

    // console.log(tutor);

    if (loading) return <Loading />;

    if (!tutor) {
        return <p className="text-center text-red-500">Tutor not found.</p>;
    }

    return (
        <section className='max-w-6xl mx-auto px-4 py-10 flex flex-col lg:justify-between lg:flex-row bg-base-200 rounded-2xl'>
            {/* left site */}
            <div className='w-1/2 mx-auto'>
                <img
                    src={tutor.image}
                    alt={tutor.name}
                    className='w-48 h-48 object-cover rounded-2xl mb-4'
                />
                <h2 className='text-2xl font-bold mb-2'>{tutor.name}</h2>
                <p className='text-gray-600 dark:text-gray-300 mb-2'>{tutor.language.toUpperCase()} Tutor</p>
                <p className='font-semibold mb-2'>Price: $ {tutor.price}</p>
                <p className='font-medium'>Reviews: {tutor.review}</p>
            </div>

            <div className='divider lg:divider-horizontal'></div>

            {/* right site */}
            <div className='flex flex-col justify-between w-1/2 mx-auto'>
                <div className='mb-10 lg:mb-0'>
                    <h3 className='text-2xl font-bold mb-4'>Description:</h3>
                    <p className='text-gray-600 dark:text-gray-300'>{tutor.description}</p>
                </div>

                <button
                    onClick={handleBook}
                    className={`btn bg-cyan-700 text-white hover:bg-cyan-800 border-none rounded-md ${booked && 'cursor-not-allowed opacity-60'}`}
                >
                    {
                        booked ?
                            'Alredy Booked' :
                            'Book This Tutor'
                    }

                </button>
            </div>
        </section>
    );
};

export default TutorDetails;
