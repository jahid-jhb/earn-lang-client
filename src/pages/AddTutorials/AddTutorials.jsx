import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import api from '../../services/api';
import Swal from 'sweetalert2';

const AddTutorials = () => {
    const { user } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const tutorialData = {
            name: user.displayName,
            email: user.email,
            image: form.image.value,
            language: form.language.value.toLowerCase(),
            price: parseFloat(form.price.value),
            description: form.description.value,
            review: 0, // default review count
        };

        try {
            const res = await api.post(`/tutorials?email=${user.email}`, tutorialData); // send POST request using api.js
            if (res.data.insertedId) {
                // alert('Tutorial added successfully!');
                Swal.fire({
                    title: "Tutorial added </br> successfully!",
                    icon: "success",
                    timer: 4000
                });

                form.reset();

                // console.log(res.data);

            }
        } catch (err) {
            console.error(err);
            Swal.fire({
                title: "Something Went Wrong ! <br> Please Try Again...",
                icon: "error",
                timer: 4000
            });
        }
    };

    return (
        <section className="max-w-3xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Add a Tutorial</h2>

            <form onSubmit={handleSubmit} className="space-y-4 bg-base-200 p-6 rounded-box shadow-md">
                <div>
                    <label className="label">Name</label>
                    <input
                        type="text"
                        defaultValue={user.displayName}
                        disabled
                        className="input input-bordered w-full"
                    />
                </div>

                <div>
                    <label className="label">Email</label>
                    <input
                        type="email"
                        defaultValue={user.email}
                        disabled
                        className="input input-bordered w-full"
                    />
                </div>

                <div>
                    <label className="label">Image URL</label>
                    <input
                        type="url"
                        name="image"
                        placeholder="Enter image URL"
                        required
                        className="input input-bordered w-full"
                    />
                </div>

                <div>
                    <label className="label">Language</label>
                    <input
                        type="text"
                        name="language"
                        placeholder="e.g. Spanish"
                        required
                        className="input input-bordered w-full"
                    />
                </div>

                <div>
                    <label className="label">Price ($)</label>
                    <input
                        type="number"
                        name="price"
                        placeholder="Enter price"
                        required
                        className="input input-bordered w-full"
                    />
                </div>

                <div>
                    <label className="label">Description</label>
                    <textarea
                        name="description"
                        placeholder="Enter description"
                        required
                        className="textarea textarea-bordered w-full"
                    ></textarea>
                </div>

                <button type="submit" className="btn bg-base-300 w-full">
                    Add Tutorial
                </button>
            </form>
        </section>
    );
};

export default AddTutorials;
