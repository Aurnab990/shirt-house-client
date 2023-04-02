import React from 'react';
import Products from '../Products/Products';
import BAnner from './Banner/BAnner';
import HeaderPart2 from './HeaderPart2';
import Mapproduct from './Mapproduct';
import Navbar from './Navbar/Navbar';

const Home = () => {
    return (
        <div className=' rounded-xl'>
            <Navbar></Navbar>
            <BAnner></BAnner>
            <HeaderPart2></HeaderPart2>
            <h1 className='text-3xl text-center font-semibold mt-5 lg:mt-10'><span>Some</span> Our <span className='text-red-400 '>Best Products</span></h1>
            <Mapproduct></Mapproduct>
        </div>
    );
};

export default Home;