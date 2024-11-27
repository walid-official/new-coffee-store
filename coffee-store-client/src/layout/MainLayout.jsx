import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className="banner-container">
                <div className="">
                <Navbar></Navbar>
                </div>
                <Banner></Banner>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;