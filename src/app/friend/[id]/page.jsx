"use client";
import CheckInCard from '@/components/FriendDetails/CheckInCard';
import CounterCards from '@/components/FriendDetails/CounterCards';
import FriendInfoCard from '@/components/FriendDetails/FriendInfoCard';
import GoalCard from '@/components/FriendDetails/GoalCard';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { RiseLoader } from 'react-spinners';

const FriendPage = () => {
    const {id} = useParams();
    const [friend, setFriend] = useState(null);

    useEffect(() => {
        fetch("/friends.json")
        .then((res) => res.json())
        .then((data) => {
            const selected = data.find((f) => f.id == id);
            setFriend(selected);
        });
    }, [id]);

    if (!friend) return <p className="flex justify-center py-10"><RiseLoader color="#244D3F" /></p>;

    return (
        <div className='bg-[#F8FAFC] py-20'>
            <div className='max-w-[80%] mx-auto'>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-6'>
                    {/* left-column */}
                    <div> 
                        <FriendInfoCard friend={friend}/>
                    </div>

                    {/* right-column */}
                    <div className='space-y-4'>
                        
                        <CounterCards friend={friend}/>

                        <GoalCard friend={friend}/>

                        <CheckInCard friend={friend}/>
                        

                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default FriendPage;