import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/Authprovider';
import Orderlist from './Orderlist';
import Navbar from '../../Home/Navbar/Navbar';


const Myitems = () => {
    const {user} = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    // const url = `http://localhost:5000/orders?email=${user.email}`;

    useEffect(()=>{
        fetch(`https://shirt-house-newserver.onrender.com/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data));

    },[]);

    const handleDelete = id =>{
        const procced = window.confirm("Are you sure?");
        if(procced){
            fetch(`https://shirt-house-newserver.onrender.com/orders/${id}`,{
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data => {
                alert("Deleted Successfully");
                const remainData = orders.filter(order => order._id !== id);
                setOrders(remainData);
         
            });
           

      }
   }

    return (
        <div>
            <Navbar></Navbar>
            <div className="overflow-x-auto w-full">
            {orders.length === 0 ? ( // Show loader when orders are being fetched
                <div className="flex justify-center items-center h-screen">
                    <div className="loader"></div>
                </div>
            ):
            (<table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                           
                        </th>
                        <th>Product Name</th>
                        <th>Customer Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* <Orderlist></Orderlist> */}
                    {
                orders.map(order => <Orderlist
                key={order._id}
                order ={order}
                handleDelete={handleDelete}
                
                >

                </Orderlist>)
            }
                    
                </tbody>
                {/* foot */}
                

            </table>
)}
        </div>
            
        </div>
    );
};

export default Myitems;