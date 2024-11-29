import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='bg-banner bg-no-repeat flex items-center justify-center bg-center bg-cover  md:h-[600px] py-10'>
            <div className='w-1/2'>
                <h3 className='md:text-3xl text-white'>Would you like a Cup of Delicious Coffee?</h3>
                <p className='text-white'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <Link to='/updateCoffee' className='btn-md md:btn bg-[#E3B577] md:bg-[#E3B577]'>Learn More</Link>
            </div>
            <div></div>
        </div>
    );
};

export default Banner;