import React from 'react';
import { RiseLoader } from 'react-spinners';

const FriendsLoader = () => {
    return (
        <div className="flex justify-center items-center py-20">
            <RiseLoader color="#244D3F" size={15} />
        </div>
    );
};

export default FriendsLoader;