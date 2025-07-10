import React from 'react';
import { Link } from 'react-router';
import { FaArrowRight, FaLanguage } from 'react-icons/fa';

const categories = [
    { name: 'English tutors', teachers: '20,305', icon: <FaLanguage /> },
    { name: 'Spanish tutors', teachers: '6,026', icon: <FaLanguage /> },
    { name: 'French tutors', teachers: '2,506', icon: <FaLanguage /> },
    { name: 'German tutors', teachers: '1,131', icon: <FaLanguage /> },
    { name: 'Italian tutors', teachers: '1,745', icon: <FaLanguage /> },
    { name: 'Chinese tutors', teachers: '4,528', icon: <FaLanguage /> },
    { name: 'Arabic tutors', teachers: '2,288', icon: <FaLanguage /> },
    { name: 'Japanese tutors', teachers: '1,524', icon: <FaLanguage /> },
    { name: 'Portuguese tutors', teachers: '1,043', icon: <FaLanguage /> },
];

const LanguageCategories = () => {

    return (
        <section className="py-10 bg-base-100 my-10">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6">Find Tutors by Language</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {categories.map((cat, index) => (
                        <Link
                            to={`/find-tutors/${cat.name.split(' ')[0].toLowerCase()}`}
                            key={index}
                            className="flex justify-between items-center p-4 bg-base-200 rounded-box hover:bg-base-300 hover:scale-105 transition"
                        >
                            <div className="flex items-center gap-4">
                                <div className="text-2xl">{cat.icon}</div>
                                <div>
                                    <h3 className="font-semibold">{cat.name}</h3>
                                    <p className="text-sm text-gray-500">{cat.teachers} teachers</p>
                                </div>
                            </div>
                            <FaArrowRight />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LanguageCategories;
