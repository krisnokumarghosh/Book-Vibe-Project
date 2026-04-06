import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
            <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-10 max-w-md w-full text-center transition-all">
                
                <h1 className="text-7xl font-extrabold text-gray-800 dark:text-white">
                    404
                </h1>
                
                <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mt-4">
                    Page not found
                </h2>

                <p className="text-gray-500 dark:text-gray-400 mt-2 mb-6">
                    Sorry, the page you're looking for doesn't exist or has been moved.
                </p>

                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition duration-300"
                    >
                        Go Home
                    </button>

                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-2 rounded-lg border border-gray-800 text-gray-800 hover:bg-gray-100 dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-700 transition duration-300"
                    >
                        Go Back
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;