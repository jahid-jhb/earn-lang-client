import React from 'react';
import { FaLock, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';

const features = [
    {
        id: 1,
        icon: <FaUsers size={32} className="text-cyan-700" />,
        title: 'Verified Tutors',
        description: 'All tutors are verified to ensure high-quality teaching.',
    },
    {
        id: 2,
        icon: <FaLock size={32} className="text-cyan-700" />,
        title: 'Secure Booking',
        description: 'Book your lessons safely with our secure payment system.',
    },
    {
        id: 3,
        icon: <FaChalkboardTeacher size={32} className="text-cyan-700" />,
        title: 'Personalized Learning',
        description: 'Find tutors that match your learning goals and preferences.',
    },
];

const WhyChooseUs = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 py-10 bg-base-200 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature) => (
                    <div key={feature.id} className="text-center p-6 rounded-lg shadow-md bg-base-100">
                        <div className="mb-4 flex justify-center">{feature.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
