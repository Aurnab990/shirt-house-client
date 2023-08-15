import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

const Mapproduct = () => {
    const [product, setProduct] = useState([]);
    const [isShown, setShown] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://shirt-house-newserver.onrender.com/shirts')
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            });
    }, []);

    const handleClick = (product) => {
        console.log(product);
        setShown(product);
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center ml-5 mt-5 mb-10'>
            {isLoading ? (
                // Render a loading spinner with animation
                <div className="loader"></div>
            ) : (
                // Render products
                product.map(products => (
                    <Products
                        key={products._id}
                        product={products}
                        handleClicked={handleClick}
                    >
                    </Products>
                ))
            )}
        </div>
    );
};

export default Mapproduct;
