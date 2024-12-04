import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Dashboard from '../pages/Dashboard';

const LoginRegisterLayout = () => {
    const {page} = useParams();
    return (
        <div>
            <Navbar></Navbar>
            {page === "Login" && <Login></Login> }
            {page === "Register" && <Register></Register>}
            {page === "DashBoard" && <Dashboard></Dashboard>}
            <Footer></Footer>
        </div>
    );
};

export default LoginRegisterLayout;