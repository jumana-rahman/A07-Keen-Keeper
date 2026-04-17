import React from 'react';
import { RiseLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <RiseLoader color="#244D3F" />
        </div>
    );
};

export default loading;