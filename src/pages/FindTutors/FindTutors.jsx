import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import TutorCard from '../../components/common/TutorCard';
import Loading from '../../components/common/Loading';

const FindTutors = () => {
    const [tutors, setTutors] = useState([]);
    const [filteredTutors, setFilteredTutors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchTutors = async () => {
            try {
                const res = await api.get('/tutors');
                setTutors(res.data);
                setFilteredTutors(res.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };

        fetchTutors();
    }, []);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);

        const filtered = tutors.filter(tutor =>
            tutor.language.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredTutors(filtered);
    };

    if (loading) return <Loading />;

    return (
        <section className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">All Tutors</h2>

            {/* Search Input */}
            <div className="mb-6 text-center">
                {/* <input
                    type="text"
                    value={search}
                    onChange={handleSearch}
                    placeholder="Search by language (e.g. English)"
                    className="input input-bordered w-full max-w-xs"
                /> */}
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search"
                        className="grow"
                        placeholder="Search by language (e.g. English)"
                        value={search}
                        onChange={handleSearch}
                    />
                </label>
            </div>

            {filteredTutors.length === 0 ? (
                <p className="text-center text-red-500">No tutors found.</p>
            ) : (
                <div className="space-y-6 grid lg:grid-cols-2 gap-8">
                    {filteredTutors.map((tutor) => (
                        <TutorCard key={tutor._id} tutor={tutor} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default FindTutors;
