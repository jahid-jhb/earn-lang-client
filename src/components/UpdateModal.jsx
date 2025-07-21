import React from 'react';
import { useNavigate } from 'react-router';
import api from '../services/api'
import Swal from 'sweetalert2';
;

const UpdateModal = ({ tutorial, setEditingTutorial }) => {
    const navigate = useNavigate();
    

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;

        const updatedData = {
            image: form.image.value,
            language: form.language.value,
            price: parseFloat(form.price.value),
            description: form.description.value,
        };

        try {
            const res = await api.put(`/tutorials/${tutorial._id}`, updatedData); // PUT request
            if (res.data.modifiedCount > 0) {
                navigate('/my-tutorials');
                setEditingTutorial(false);

                Swal.fire({
                    title: "Tutorial Updated Successfully!",
                    icon: "success",
                    timer: 3000,
                    showConfirmButton: false,
                });

            } else {
                Swal.fire({
                    title: "No changes were made.",
                    icon: "info",
                    timer: 3000,
                    showConfirmButton: false,
                });
            }
        } catch (err) {
            console.error('Update error:', err);
            Swal.fire({
                title: "Something went wrong!",
                text: "Please try again.",
                icon: "error",
                timer: 3000,
                showConfirmButton: false,
            });
        }

        document.getElementById(`update_modal_${tutorial._id}`).close(); // close modal
    };

    return (
        <form onSubmit={handleUpdate} className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Update Tutorial</h2>

            <div>
                <label className="label">Name</label>
                <input
                    type="text"
                    name="name"
                    value={tutorial.name}
                    disabled
                    className="input input-bordered w-full"
                />
            </div>
            <div>
                <label className="label">Email</label>
                <input
                    type="text"
                    name="email"
                    value={tutorial.email}
                    disabled
                    className="input input-bordered w-full"
                />
            </div>
            <div>
                <label className="label">Image URL</label>
                <input
                    type="text"
                    name="image"
                    defaultValue={tutorial.image}
                    required
                    className="input input-bordered w-full"
                />
            </div>

            <div>
                <label className="label">Language</label>
                <input
                    type="text"
                    name="language"
                    defaultValue={tutorial.language}
                    required
                    className="input input-bordered w-full"
                />
            </div>

            <div>
                <label className="label">Price ($)</label>
                <input
                    type="number"
                    name="price"
                    defaultValue={tutorial.price}
                    required
                    className="input input-bordered w-full"
                />
            </div>

            <div>
                <label className="label">Description</label>
                <textarea
                    name="description"
                    defaultValue={tutorial.description}
                    required
                    className="textarea textarea-bordered w-full"
                ></textarea>
            </div>

            <div>
                <label className="label">Review</label>
                <input
                    type="text"
                    name="review"
                    value={tutorial.review}
                    disabled
                    className="input input-bordered w-full"
                />
            </div>

            <button type="submit" className="btn bg-cyan-700 text-white hover:bg-cyan-800 border-none w-full">
                Update Tutorial
            </button>
        </form>
    );
};

export default UpdateModal;
