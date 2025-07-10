import React from 'react';
import CountUp from 'react-countup';
import { FaStar } from 'react-icons/fa';

const Stats = () => {
    return (
        <section className="py-10 bg-base-200 my-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">

                    {/* Tutors */}
                    <div>
                        <h3 className="text-2xl font-bold">
                            <CountUp
                                end={32000}
                                duration={3}
                                enableScrollSpy={true} />
                            +
                        </h3>
                        <p className="text-gray-600">Experienced tutors</p>
                    </div>

                    {/* Reviews */}
                    <div>
                        <h3 className="text-2xl font-bold">
                            <CountUp
                                end={300000}
                                duration={3}
                                enableScrollSpy={true} />
                            +</h3>
                        <p className="text-gray-600">5-star tutor reviews</p>
                    </div>

                    {/* Subjects */}
                    <div>
                        <h3 className="text-2xl font-bold">
                            <CountUp
                                end={120}
                                duration={3}
                                enableScrollSpy={true} />
                            +</h3>
                        <p className="text-gray-600">Subjects taught</p>
                    </div>

                    {/* Nationalities */}
                    <div>
                        <h3 className="text-2xl font-bold">
                            <CountUp
                                end={180}
                                duration={3}
                                enableScrollSpy={true} />
                            +</h3>
                        <p className="text-gray-600">Tutor nationalities</p>
                    </div>

                    {/* App Rating */}
                    <div>
                        <h3 className="text-2xl font-bold flex items-center justify-center gap-1">
                            <CountUp
                                end={4}
                                duration={2}
                                enableScrollSpy={true} />
                            .8
                            {
                                [0, 1, 2, 3, 4].map((n) => <FaStar key={n} size={12} />)
                            }
                        </h3>
                        <p className="text-gray-600">on the App Store</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Stats;
