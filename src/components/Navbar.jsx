import React from 'react';
import banner from '../assets/images/more/logo1.png'

const Navbar = () => {
    return (
        <div className='bg-bgnav bg-no-repeat bg-cover bg-center py-1'>
            <div className='flex items-center md:w-4/12 w-6/12 mx-auto'>
                <img className='md:w-16 w-8' src={banner} alt="" />
                <h3 className='md:text-3xl font-bold text-white'>Espresso Emporium</h3>
            </div>
        </div>
    );
};

export default Navbar;