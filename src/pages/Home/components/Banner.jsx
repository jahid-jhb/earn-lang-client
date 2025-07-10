import React from 'react';
import studentPic from '../assets/student.png';
import { useNavigate } from 'react-router';

const Banner = () => {

  const navigate = useNavigate();

  return (
    <div className="hero bg-base-200 my-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className=''>
          <img
            src={studentPic}
            className="md:max-w-md md:-mb-10"
            alt="Student learning languages"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold">
            Connect, Learn, and Grow <span className="text-cyan-700">Globally</span>
          </h1>
          <p className="py-6">
            Find the perfect tutor to master your desired language or share your knowledge as a tutor.
            Start your journey towards effective communication and cultural understanding today.
          </p>
          <button onClick={() => navigate('/find-tutors')} className="btn bg-cyan-700 text-white">Find Tutors</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
