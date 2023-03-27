import logo from './logo.svg';
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

const router = createBrowserRouter([
  {path:'/', element:<Main></Main>},
  {path:'/login', element:<Login></Login>},
  //{path:'login/signup/login', element:<Login></Login>},
  {path:'login/signup', element:<Signup></Signup>}
  
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
 
    </div>
  );
}

export default App;
