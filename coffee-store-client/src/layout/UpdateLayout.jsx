import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UpdateCoffee from '../components/UpdateCoffee/UpdateCoffee';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const UpdateLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <UpdateCoffee ></UpdateCoffee>
            <Footer></Footer>
        </div>
    );
};

export default UpdateLayout;