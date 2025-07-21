import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import api from '../../services/api';
import Swal from 'sweetalert2';
import Loading from '../../components/common/Loading';

const MyBookedTutors = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const res = await api.get(`/bookings?email=${user.email}`);
                setBookings(res.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };

        if (user) {
            fetchBookings();
        }
    }, [user]);

    

    const handleReview = async (booking) => {
        try {
            const res = await api.put(`/tutors/${booking.tutorId}/review`, { review: booking.review+1 }); // increments by 1
            if (res.data.modifiedCount > 0) {
                Swal.fire({
                    title: "Review submitted successfully!",
                    icon: "success",
                    timer: 3000,
                    showConfirmButton: false,
                });
            } else {
                Swal.fire({
                    title: "Failed to submit review.",
                    icon: "error",
                    timer: 3000,
                    showConfirmButton: false,
                });
            }
        } catch (err) {
            console.error('Review error:', err);
            Swal.fire({
                title: "Something went wrong!",
                text: "Please try again.",
                icon: "error",
                timer: 3000,
                showConfirmButton: false,
            });
        }
    };

    if (loading) return <Loading />;

    return (
        <section className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">My Booked Tutors</h2>

            {bookings.length === 0 ? (
                <p className="text-center text-red-500">You have not booked any tutors yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Language</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking) => (
                                <tr key={booking._id}>
                                    <td>
                                        <img
                                            src={booking.image}
                                            alt={booking.language}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                    </td>
                                    <td>{booking.name || "No Name"}</td>
                                    <td>{booking.language.toUpperCase()}</td>
                                    <td>${booking.price}</td>
                                    <td>
                                        <button
                                            onClick={() => handleReview(booking)}
                                            className="btn btn-sm bg-gray-300 dark:bg-cyan-700"
                                        >
                                            Review
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
};

export default MyBookedTutors;
