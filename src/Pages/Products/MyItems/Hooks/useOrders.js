import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../AuthProvider/Authprovider";

const useOrders = () =>{
    const {user} = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    // const url = `http://localhost:5000/orders?email=${user.email}`;

    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data));

    },[]);
    return[orders, setOrders]
}
export default useOrders;