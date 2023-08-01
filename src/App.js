// import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import { useEffect, useState } from 'react';
import Products from './Pages/Products/Products';
import Login from './Layout/Register/Login';
import Signup from './Layout/Register/Signup';
import ProductDetails from './Pages/Products/ProductDetails';
import Checkout from './Pages/Products/Checkout';
import Navbar from './Pages/Home/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Myitems from './Pages/Products/MyItems/Myitems';

const router = createBrowserRouter([
  {path:'/', element:<Main></Main>},
  {path:'/', element:<Home></Home>},
  {path:'/login', element:<Login></Login>},
  //{path:'login/signup/login', element:<Login></Login>},
  {path:'login/signup', element:<Signup></Signup>},
  {
    path:'/details/:id', 
    element:<ProductDetails></ProductDetails>, 
    loader: ({params})=> fetch(`https://car-house-server-topaz.vercel.app/shirts/${params.id}`)

},
{
  path:'/details/:id/checkout',
  element:<Checkout></Checkout>,
  loader: ({params})=> fetch(`https://car-house-server-topaz.vercel.app/shirts/${params.id}`)
},
{
  path:'/myitems',
  element:<Myitems></Myitems>

}
  
]);

function App() {
  return (
    <div className="">
      
      <RouterProvider router={router}>
        
      </RouterProvider>
 
    </div>
  );
}

export default App;
