import React from 'react';
import Banner from './components/Banner';
import Stats from './components/Stats';
import LanguageCategories from './components/LanguageCategories';
import TutorCard from '../../components/common/TutorCard';

const Home = () => {

    return (
        <>
           <Banner />
           <Stats />
           <LanguageCategories />

           <TutorCard />
        </>
    );
};

export default Home;
