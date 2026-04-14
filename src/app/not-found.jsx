import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f7f6] text-center px-4">
      
            <h1 className="text-7xl md:text-9xl font-bold text-[#244d3f]">
                404
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
                Page Not Found
            </h2>

            <p className="text-gray-600 mt-2 max-w-md">
                Oops! The page you are looking for doesn’t exist or has been moved.
            </p>

            <Link
                href="/"
                className="mt-6 inline-flex items-center gap-2 bg-[#244d3f] text-white px-6 py-3 rounded-lg hover:bg-[#1b3a30] transition"
            >
                ← Back to Home
            </Link>
        </div>
    );
};

export default NotFound;