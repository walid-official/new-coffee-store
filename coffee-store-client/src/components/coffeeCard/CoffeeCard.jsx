import React from 'react';
import mainIcon1 from '../../assets/icons/main_icon1.png'
import mainIcon2 from '../../assets/icons/main_icon2.png'
import mainIcon3 from '../../assets/icons/main_icon3.png'
const CoffeeCard = () => {
    return (
        <div className='grid md:grid-cols-3 w-[80%] mx-auto py-10'>
            <div className="bg-[#b89d64] rounded-l-full rounded-r-badge py-12 flex justify-center">
                <div className="">
                    <img className='w-36' src={mainIcon1} alt="" />
                    <h2 className='text-center text-white text-2xl'>Natural <span className='text-[#2b1b13]  '>Coffee</span> </h2>
                </div>
            </div>
            <div className="bg-[#513826] py-12 flex justify-center">
            <div className="">
                    <img className='w-36' src={mainIcon2} alt="" />
                    <h2 className='text-center text-white text-2xl'>Chaines <span className='text-[#b89d64]'>Coffee</span> </h2>
                </div>
            </div>
            <div className="bg-[#2b1b13] rounded-r-full py-12 flex justify-center">
            <div className="">
                    <img className='w-36' src={mainIcon3} alt="" />
                    <h2 className='text-center text-white text-2xl'>Sweet <span className='text-[#513826]'>Deserts</span> </h2>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;