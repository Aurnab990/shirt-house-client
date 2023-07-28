import React, { useState } from 'react';
import Myitems from './Myitems';
import useOrders from './Hooks/useOrders';

const Orderlist = ({order,handleDelete}) => {
    const {_id, itemName, address, quantityTotal, itemPrice, customerName, phone } = order;
    
    // console.log(_id);
    
     
    return (
        
        
                    
                        <tr className='text-white'>
                        <th>
                            
                            
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                               
                                <div>
                                    <div className="font-bold">{itemName}</div>
                                    <div className="text-sm opacity-50">Bangladesh</div>
                                </div>
                            </div>
                        </td>
                        <td>
                        <div>
                                    <div className="font-bold">{customerName}</div>
                                    
                                </div>
                        </td>
                        <td>
                            {address}
                            <br />
                            <span className="badge badge-ghost badge-sm">extra charge</span>
                        </td>
                        <td>
                        <div>
                                    <div className="font-bold">{phone}</div>
                                    
                                </div>
                        </td>
                        <td>{itemPrice}</td>
                        <td>{quantityTotal}</td>
                        <th>
                            <button className="btn btn-warning btn-xs">Processing</button>
                            
                        </th>
                        <td>
                            <div>
                            <button className='btn btn-outline btn-error' onClick={()=> handleDelete(_id)}>Cancel order</button>
                            </div>
                        </td>
                        
                        
                    
                        
                        
                        
                    </tr>
                    
                    
                    
                    
                    
                
                
                

            
    

    );
};

export default Orderlist;