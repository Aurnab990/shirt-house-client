import React from 'react';
import Products from '../Products/Products';
import BAnner from './Banner/BAnner';
import HeaderPart2 from './HeaderPart2';
import Mapproduct from './Mapproduct';
import Navbar from './Navbar/Navbar';

const Home = () => {
    return (
        <div className='p-5 rounded-xl'>
            <Navbar></Navbar>
            <BAnner></BAnner>
            <HeaderPart2></HeaderPart2>
            <Mapproduct></Mapproduct>
        </div>
    );
};

export default Home;