import React from 'react';

const FriendPage = async ({params}) => {
    const {id} = await params;
    console.log(id, "params");
    return (
        <div>
            friends
        </div>
    );
};

export default FriendPage;