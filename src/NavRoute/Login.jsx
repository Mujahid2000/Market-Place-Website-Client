import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/Authprovider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { login, googleSignIn, user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogle = () => {
        googleSignIn().then(result => {
            const email = result.email; // Assuming `result` contains the email
            // Running code
            axios.post("http://localhost:5050/jwt", 
                { email },
                { withCredentials: true }
            )
            .then((res) => {
                console.log(res.data);
                if (res.data.success) {
                    navigate(location.state || '/');
                }
            })
            .catch((error) => {
                console.error(error);
            });
        });
    }

    useEffect(() => {
        if (user) {
            navigate(location.state || '/');
        }
    }, [user]);

    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email'); 
        const password = form.get('password'); 

        login(email, password)
            .then(result => {
                Swal.fire(
                    'Login Successful!',
                    'You have successfully logged in.',
                    'success'
                );
                // Running code
                axios.post("http://localhost:5050/jwt", 
                    { email },
                    { withCredentials: true }
                )
                .then((res) => {
                    console.log(res.data);
                    if (res.data.success) {
                        navigate(location.state || '/');
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
            })
            .catch(err => {
                console.error(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.message,
                });
            });
    }

    return (
        <div className="min-h-screen flex items-center justify-center dark:bg-gray-900 bg-gradient-to-b from-indigo-600 to-indigo-900">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-indigo-600 mb-4">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="w-full py-2 px-3 border rounded-md focus:outline-none focus:border-indigo-600"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full py-2 px-3 border rounded-md focus:outline-none focus:border-indigo-600"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    >
                        Log In
                    </button>
                </form>
                <div className="mt-4">
                    <button onClick={handleGoogle} className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600">
                        <FaGoogle className="inline-block mr-2" />
                        Log in with Google
                    </button>
                </div>
                <Link to='/register'>
                    <p className="mt-4 text-sm text-gray-600 text-center">
                        <span className="text-indigo-600">Don't have an account? Sign up</span>
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default Login;
