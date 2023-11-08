import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvide from './AuthProvider/Authprovider';
import Update from './CardFile/Update';
import JobDetails from './JobDetails.jsx/JobDetails';
import AddJob from './NavRoute/AddJob';
import BidReq from './NavRoute/BidReq';
import Login from './NavRoute/Login';
import MyBids from './NavRoute/MyBids';
import MyPostedJobs from './NavRoute/MyPostedJobs';
import Register from './NavRoute/Register';
import Error from './ParentFile/Error';
import Home from './ParentFile/Home';
import Main from './ParentFile/Main';
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
        loader: () => fetch('https://marketplace-website-server.vercel.app/addJobs'),
      },
      {
        path: '/addJob',
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path: '/myPostedJob',
        element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>,
      },
      {
        path: '/myBids',
        element: <PrivateRoute><MyBids></MyBids></PrivateRoute>,
        
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
        loader: () => fetch('https://marketplace-website-server.vercel.app/addJobs')
      },
      {
        path: '/update/:_id',
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({ params }) => fetch(`https://marketplace-website-server.vercel.app/addJobs/${params._id}`, {
          method: 'GET',
           
        })
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
