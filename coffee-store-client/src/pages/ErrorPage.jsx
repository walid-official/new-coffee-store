import React from 'react';
import errorImg from "../assets/404/404.gif"
const ErrorPage = () => {
    return (
        <div className='flex justify-center h-screen'>
            <img src={errorImg} alt="" />
        </div>
    );
};

export default ErrorPage;