import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import api from '../../services/api';
import Swal from 'sweetalert2';
import UpdateModal from '../../components/UpdateModal';
import Loading from '../../components/common/Loading';

const MyTutorials = () => {

    const { user } = useAuth();

    const [tutorials, setTutorials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingTutorial, setEditingTutorial] = useState(false); // state for modal

    useEffect(() => {
        const fetchTutorials = async () => {
            try {
                const res = await api.get(`/tutorials?email=${user.email}`);
                setTutorials(res.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };

        if (user) {
            fetchTutorials();
        }
    }, [user, editingTutorial]);

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        });

        if (result.isConfirmed) {
            try {
                const res = await api.delete(`/tutorials/${id}?email=${user.email}`);
                if (res.data.deletedCount > 0) {
                    setTutorials(prev => prev.filter(tut => tut._id !== id));
                    Swal.fire('Deleted!', 'Your tutorial has been deleted.', 'success');
                } else {
                    Swal.fire('Failed!', 'Tutorial could not be deleted.', 'error');
                }
            } catch (err) {
                console.error('Delete error:', err);
                Swal.fire('Error!', 'An error occurred.', 'error');
            }
        }
    };

    const handleUpdate = (tut) => {
        setEditingTutorial(true);
        document.getElementById(`update_modal_${tut._id}`).showModal(); // open modal
    };

    if (loading) return <Loading />;

    return (
        <section className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">My Tutorials</h2>

            {tutorials.length === 0 ? (
                <p className="text-center text-red-500">You have not added any tutorials yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Language</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Review</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tutorials.map((tut) => (
                                <tr key={tut._id}>
                                    <td>
                                        <img
                                            src={tut.image}
                                            alt={tut.language}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                    </td>
                                    <td>{tut.language}</td>
                                    <td>${tut.price}</td>
                                    <td>{tut.description?.slice(0, 50)}...</td>
                                    <td>{tut.review}</td>
                                    <td className="flex gap-2 mt-4">
                                        <button
                                            onClick={() => handleUpdate(tut)}
                                            className="btn btn-info btn-sm text-white"
                                        >
                                            Update
                                        </button>

                                        {/* Update Modal */}
                                        <dialog id={`update_modal_${tut._id}`} className="modal">
                                            <div className="modal-box">
                                                <UpdateModal tutorial={tut} setEditingTutorial={setEditingTutorial} />
                                                <div className="modal-action">
                                                    <form method="dialog">
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>

                                        <button
                                            onClick={() => handleDelete(tut._id)}
                                            className="btn btn-sm btn-error text-white"
                                        >
                                            Delete
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

export default MyTutorials;
