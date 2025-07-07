import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const DashboardLayout = () => {
    return (
        <>
            <Navbar />

            <div className='max-w-11/12 mx-auto'>
                <Outlet />
            </div>

            <Footer />
        </>
    );
};

export default DashboardLayout;
