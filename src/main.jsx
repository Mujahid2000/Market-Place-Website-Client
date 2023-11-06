import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './ParentFile/Main';
import Home from './ParentFile/Home';
import AddJob from './NavRoute/AddJob';
import MyPostedJobs from './NavRoute/MyPostedJobs';
import MyBids from './NavRoute/MyBids';
import BidReq from './NavRoute/BidReq';
import Login from './NavRoute/Login';
import Register from './NavRoute/Register';
import Error from './ParentFile/Error';
import AuthProvide from './AuthProvider/Authprovider';
import JobDetails from './JobDetails.jsx/JobDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5050/addJobs'),
      },
      {
        path: '/addJob',
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path: '/myPostedJob',
        element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>,
        loader: () => fetch('http://localhost:5050/addJobs'),
      },
      {
        path: '/myBids',
        element: <PrivateRoute><MyBids></MyBids></PrivateRoute>
      },
      {
        path: '/bidReq',
        element: <PrivateRoute><BidReq></BidReq></PrivateRoute>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/detail/:_id',
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: () => fetch('http://localhost:5050/addJobs')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[1800px] mx-auto'>
    <AuthProvide>
    <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
    </AuthProvide>
  </div>
)
