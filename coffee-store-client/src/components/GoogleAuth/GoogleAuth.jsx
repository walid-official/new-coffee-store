import React from 'react';
import Google from "../../assets/google.png"
const GoogleAuth = () => {
    return (
        <div>
            
            
            <button type="button" className="btn w-full flex gap-2 bg-[#E3B577]">
                <img className='w-10' src={Google} alt="" />
                Continue With Google</button>
        </div>
    );
};

export default GoogleAuth;