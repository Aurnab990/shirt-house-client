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

const router = createBrowserRouter([
  {path:'/', element:<Main></Main>},
  {path:'/login', element:<Login></Login>}
  
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
 
    </div>
  );
}

export default App;
