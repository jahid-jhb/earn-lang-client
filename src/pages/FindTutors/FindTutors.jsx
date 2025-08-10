import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import TutorCard from '../../components/common/TutorCard';
import Loading from '../../components/common/Loading';

const FindTutors = () => {
    const [tutors, setTutors] = useState([]);
    const [filteredTutors, setFilteredTutors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [sortOption, setSortOption] = useState('');

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
        setFilteredTutors(applySorting(filtered, sortOption));
    };

    const handleSortChange = (e) => {
        const option = e.target.value;
        setSortOption(option);
        setFilteredTutors(applySorting(filteredTutors, option));
    };

    const applySorting = (data, option) => {
        const sorted = [...data];
        if (option === 'priceLowToHigh') {
            sorted.sort((a, b) => a.price - b.price);
        } else if (option === 'priceHighToLow') {
            sorted.sort((a, b) => b.price - a.price);
        }
        return sorted;
    };

    if (loading) return <Loading />;

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-4xl font-extrabold mb-8 text-center">Find Your Tutor</h2>

            {/* Search and Sort Controls */}
            <div className="mb-10 flex flex-col lg:flex-row justify-between items-center gap-6">
                <div className="w-full lg:w-1/2">
                    <label className="input input-bordered flex items-center gap-2">
                        <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                        </svg>
                        <input
                            type="search"
                            className="grow text-sm"
                            placeholder="Search by language (e.g. English)"
                            value={search}
                            onChange={handleSearch}
                        />
                    </label>
                </div>

                <div className="w-full lg:w-1/3">
                    <select
                        className="select select-bordered w-full text-sm"
                        value={sortOption}
                        onChange={handleSortChange}
                    >
                        <option value="">Sort by Price</option>
                        <option value="priceLowToHigh">Price: Low to High</option>
                        <option value="priceHighToLow">Price: High to Low</option>
                    </select>
                </div>
            </div>

            {filteredTutors.length === 0 ? (
                <p className="text-center text-red-500 text-lg font-medium">No tutors found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {filteredTutors.map((tutor) => (
                        <TutorCard key={tutor._id} tutor={tutor} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default FindTutors;