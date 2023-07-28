import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';
import { AuthContext } from '../../AuthProvider/Authprovider';

const ProductDetails = () => {
    const {user} = useContext(AuthContext);
    const { img,name,description,price,stocks } = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200 p-24">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="py-5 text-5xl font-bold text-red-400">{name}</h1>
                        <p className='text-xl font-semibold text-green-700'>Avaiable: {stocks}</p>
                        <p className="py-2 text-white">{description}</p>
                        <p className="py-2 font-semibold text-2xl text-red-400"><spna className="text-white">Price:</spna> ${price}</p>
                        {
                            user?
                            <Link to={"checkout"}>
                        <button className="btn btn-primary">Check Out</button>
                        </Link>
                        :
                        <Link to={"/login"}><button className="btn btn-primary">Check Out</button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;