import React, { useState } from 'react';
import Banner from './components/Banner';
import Feature from './components/Feature';
import { Link, useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';
import { BsCup } from 'react-icons/bs';
import myImage from './assets/images/more/4.png'
import myImage2 from './assets/images/more/5.png'
import Cap from './components/Cap';


const Home = () => {
    const loaderCoffees = useLoaderData();
    const [Coffees, setCoffees] = useState(loaderCoffees)

    return (
        <div className='mb-5'>

            <Banner></Banner>
            <div className='bg-[#ECEAE3] my-5'>
                <Feature></Feature>
            </div>
            <section className='py-10 my-5'>
                <div className='space-y-3' style={{
                    backgroundImage: `url(${myImage}), url(${myImage2})`,
                    backgroundPosition: 'left top, right bottom',
                    backgroundRepeat: 'no-repeat, no-repeat',


                }} >
                    <p className='text-center'>--Sip & Savor---</p>
                    <h3 className='text-center md:text-3xl text-xl text-[#331A15]'>Our Popular Products</h3>
                    <div className='flex items-center justify-center'>
                        <Link to='/addCoffee'>
                            <button className='px-4 flex items-center gap-1 text-xl py-2 bg-[#E3B577] border-2 border-black hover:bg-[#331A15] rounded-lg  text-white'>Add Coffee <BsCup size={24} color='#331A15' /></button>
                        </Link>
                    </div>
                    <div className='grid md:grid-cols-2 py-5  w-11/12 mx-auto gap-5'>
                        {
                            Coffees.map(coffee => <CoffeeCard
                                key={coffee._id}
                                coffee={coffee}
                                Coffees={Coffees}
                                setCoffees={setCoffees}

                            ></CoffeeCard>)
                        }
                    </div>
                </div>
            </section>

            <div className='bg-addCoffee py-10 my-5'>
                <Cap></Cap>
            </div>

        </div>
    );
};

export default Home;