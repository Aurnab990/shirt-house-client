import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/Authprovider';
import Navbar from '../Home/Navbar/Navbar';
import { useLoaderData } from 'react-router';

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const [totalPrice, setTotalPrice] = useState(0);

    const { name, _id, price } = useLoaderData();

    const handleplaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const customername = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const address = form.address.value;
        const phone = form.phoneNumber.value;
        const quantityTotal = form.quantity.value;

        
        const calculatedTotalPrice = quantityTotal * price;
        setTotalPrice(calculatedTotalPrice);


        const order = {
            _id,
            itemName: name,
            itemPrice: calculatedTotalPrice,
            customerName: customername,
            email,
            phone,
            address,
            quantityTotal

        }

        fetch('https://shirt-house-newserver.onrender.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert("Thanks for your Order");
                    form.reset();
                }
            });
    }
    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleplaceOrder}>
                <div className="p-24 w-full">
                    <div className="card-body">
                        <h1 className='uppercase'>Check Out Page</h1>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                            <input name='firstName' type="text" placeholder="First Name" className="input  input-bordered input-secondary w-full max-w-full" />
                            <input name='lastName' type="text" placeholder="Last Name" className="input  input-bordered input-secondary w-full max-w-full" />
                            <input name='productName' type="text" placeholder="Product-Name" defaultValue={name} className="input input-bordered input-secondary w-full" />
                            <input name='email' type="text" placeholder="email" value={user?.email} className="input input-bordered input-secondary w-full" />
                            <input name='address' type="text" placeholder="Address one" className="input input-bordered input-secondary w-full " />
                            <input name='phoneNumber' type="phone-number" placeholder="Mobile Number" className="input input-bordered input-secondary w-full" />
                            <input name='quantity' type="number" placeholder="Quantity" className="input input-bordered input-secondary w-full" />
                            <input name='totalPrice' type="price" placeholder="Total-price" value={totalPrice} className="input input-bordered input-secondary w-full" />
                        </div>

                        <div className="">
                            <button className="btn btn-primary w-full">Buy Now</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkout;