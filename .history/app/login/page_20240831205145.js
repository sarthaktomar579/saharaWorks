import React from 'react';

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-14 text-white">
            <h1 className="text-center text-3xl font-bold mb-6">
                Login/Signup to Get your fans support to you
            </h1>
            <div className="flex flex-col gap-4 items-center">
                <button
                    className="flex items-center w-80 border bg-white border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0 48 48" version="1.1">
                        <!-- SVG content -->
                    </svg>
                    <span>Continue with Google</span>
                </button>
                
                <button
                    className="flex items-center w-80 border bg-white border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0 48 48" version="1.1">
                        <!-- SVG content -->
                    </svg>
                    <span>Continue with LinkedIn</span>
                </button>
                
                <button
                    className="flex items-center w-80 border bg-white border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0 48 48" version="1.1">
                        <!-- SVG content -->
                    </svg>
                    <span>Continue with Twitter</span>
                </button>

                <button
                    className="flex items-center w-80 border bg-white border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0 48 48" version="1.1">
                        <!-- SVG content -->
                    </svg>
                    <span>Continue with Facebook</span>
                </button>

                <button
                    className="flex items-center w-80 border bg-white border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0 48 48" version="1.1">
                        <!-- SVG content -->
                    </svg>
                    <span>Continue with GitHub</span>
                </button>
            </div>
        </div>
    );
};

export default Login;
