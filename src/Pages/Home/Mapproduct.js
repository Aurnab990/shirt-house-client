import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

const Mapproduct = () => {
    const[product,setProduct] = useState([]);
    const[isShown, setShown] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/shirts')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
const handleClick = (product) =>{
        console.log(product);
        setShown(product);
    }
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between ml-5 mt-5 mb-10'>
            {
                product.map(products =><Products
                key={products._id}
                product={products}
                handleClicked={handleClick}
                >

                </Products>)
            }
            
        </div>
    );
};

export default Mapproduct;