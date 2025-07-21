import React from 'react';
import { FaHeart, FaStar } from "react-icons/fa";
import { BsInfoCircle, BsPersonFill } from "react-icons/bs";
import { useNavigate } from 'react-router';

const TutorCard = ({ tutor }) => {
    const navigate = useNavigate();

    // console.log(tutor);

    return (
        <div className="card md:card-side bg-base-100 shadow-md border border-base-300 p-4 w-full max-w-3xl mx-auto transition-all hover:scale-105">
            <figure>
                <img
                    src={tutor.image}
                    alt={tutor.name}
                    className="max-w-28 max-h-28 object-cover rounded-md"
                />
            </figure>

            <div className="card-body p-2 md:p-4 text-base-content">
                <div className="flex justify-between items-start flex-col md:flex-row">
                    {/* Left */}
                    <div className="mb-2 md:mb-0">
                        <h2 className="text-lg font-semibold">
                            {tutor.name}
                        </h2>
                        <p className="text-sm mb-2">{tutor.language?.toUpperCase()}</p>
                        <p className="text-sm text-gray-400">
                            🗣️ Speaks {tutor.language?.toUpperCase()} (Proficient)
                        </p>
                    </div>

                    {/* Right */}
                    <div className="md:text-right my-3 md:my-0">
                        <p className="flex items-center justify-end gap-1 font-medium">
                            <FaStar /> {tutor.rating || 5}
                            <span className="text-sm text-gray-400">
                                ({tutor.review} reviews)
                            </span>
                        </p>
                        <p className="text-xl font-bold text-gray-400">
                            BDT {tutor.price}
                        </p>
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm mt-2 text-base-content">
                    <span className="font-semibold text-cyan-300">
                        Description:
                    </span>{" "}
                    — {tutor.description?.slice(0, 80)}...
                </p>

                {/* Bottom Action */}
                <div className="flex justify-between items-center mt-4">
                    <button className="tooltip tooltip-left" data-tip="Add to Favorite">
                        <FaHeart className="text-gray-400 hover:text-cyan-700 cursor-pointer text-xl" />
                    </button>
                    <div
                        onClick={() => navigate(`/tutor/${tutor._id}`)}
                        className="tooltip tooltip-left" data-tip="Details">
                        <BsInfoCircle size={24} className="text-gray-400 hover:text-cyan-700 cursor-pointer text-xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorCard;
