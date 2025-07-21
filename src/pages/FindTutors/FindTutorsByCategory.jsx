import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import api from '../../services/api'; // your configured Axios instance
import Loading from '../../components/common/Loading';
import TutorCard from '../../components/common/TutorCard';

const FindTutorsByCategory = () => {
    const { category } = useParams();
    const [tutors, setTutors] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // console.log(category);
    

    useEffect(() => {
        const fetchTutors = async () => {
            try {
                const res = await api.get(`/find-tutors/${category}`);
                setTutors(res.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };

        fetchTutors();
    }, [category]);

    if (loading) return <Loading />

    if (tutors.length === 0) {
        return <p className="text-center text-red-500">No tutors found for {category}.</p>;
    }

    return (
        <section className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">
                Tutors for {category}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {tutors.map((tutor) => <TutorCard key={tutor._id} tutor={tutor} />)}
            </div>
        </section>
    );
};

export default FindTutorsByCategory;
