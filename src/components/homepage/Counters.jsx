"use client";

import React, { useEffect, useState } from 'react';

const Counters = () => {
    const [friends, setFriends] = useState([]);
    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        // fetch friends from public folder
        fetch("/friends.json")
            .then(res => res.json())
            .then(data => setFriends(data));

        // get timeline from sessionStorage
        const storedTimeline = JSON.parse(sessionStorage.getItem("timeline")) || [];
        setTimeline(storedTimeline);
    }, []);

    // ✅ Calculations
    const totalFriends = friends.length;

    const onTrack = friends.filter(f => f.status === "on-track").length;

    const needAttention = friends.filter(
        f => f.status === "overdue" || f.status === "almost due"
    ).length;

    const interactionsThisMonth = timeline.filter(item => {
        const itemDate = new Date(item.date);
        const now = new Date();

        return (
            itemDate.getMonth() === now.getMonth() &&
            itemDate.getFullYear() === now.getFullYear()
        );
    }).length;

    return (
        <div className='mb-10'>
            <div className='max-w-[80%] mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5 mb-10'>
                    
                    <div className='card text-center p-8 bg-white border border-gray-100 rounded-sm'>
                        <h3 className='font-semibold text-[32px] text-[#1F2937]'>{totalFriends}</h3>
                        <p className='text-[18px] text-[#64748B]'>Total Friends</p>
                    </div>

                    <div className='card text-center p-8 bg-white border border-gray-100 rounded-sm'>
                        <h3 className='font-semibold text-[32px] text-[#1F2937]'>{onTrack}</h3>
                        <p className='text-[18px] text-[#64748B]'>On Track</p>
                    </div>

                    <div className='card text-center p-8 bg-white border border-gray-100 rounded-sm'>
                        <h3 className='font-semibold text-[32px] text-[#1F2937]'>{needAttention}</h3>
                        <p className='text-[18px] text-[#64748B]'>Need Attention</p>
                    </div>

                    <div className='card text-center p-8 bg-white border border-gray-100 rounded-sm'>
                        <h3 className='font-semibold text-[32px] text-[#1F2937]'>{interactionsThisMonth}</h3>
                        <p className='text-[18px] text-[#64748B]'>Interactions This Month</p>
                    </div>

                </div>

                <div className='divider'></div>
            </div>
        </div>
    );
};

export default Counters;