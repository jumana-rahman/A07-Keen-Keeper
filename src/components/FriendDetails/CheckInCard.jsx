"use client";

import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { FiVideo } from 'react-icons/fi';
import { MdOutlineTextsms } from 'react-icons/md';
import { toast } from 'react-toastify';

const CheckInCard = ({friend}) => {
    const handleCheckIn = (type) => {
        const newEntry = {
        id: Date.now(),
        type: type,
        title: `${type} with ${friend.name}`,
        date: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            }),
        };

        // get existing timeline
        const existing = JSON.parse(sessionStorage.getItem("timeline")) || [];

        // add new entry
        const updated = [newEntry, ...existing];

        // save to localStorage
        sessionStorage.setItem("timeline", JSON.stringify(updated));

        // show toast
        toast.success(`${type} added to timeline`);
    };
    return (
        <div>
            <div className='card p-8 bg-white border border-gray-100 rounded-md'>
                <h3 className='font-medium text-[20px] text-[#1F2937] capitalize mb-4'>quick check-in</h3>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5'>
                    <div onClick={() => handleCheckIn("Call")} className=' text-center p-4 bg-[#F8FAFC] border border-gray-100 rounded-md cursor-pointer transition-all duration-300 hover:bg-zinc-100'>
                        <h3 className='font-semibold text-[32px] text-[#1F2937] flex justify-center pb-2'><BiPhoneCall /></h3>
                        <p className='text-[18px] text-[#1F2937]'>Call</p>
                    </div>

                    <div onClick={() => handleCheckIn("Text")} className=' text-center p-4 bg-[#F8FAFC] border border-gray-100 rounded-md cursor-pointer transition-all duration-300 hover:bg-zinc-100'>
                        <h3 className='font-semibold text-[32px] text-[#1F2937] flex justify-center pb-2'><MdOutlineTextsms /></h3>
                        <p className='text-[18px] text-[#1F2937]'>Text</p>
                    </div>

                    <div onClick={() => handleCheckIn("Video")} className=' text-center p-4 bg-[#F8FAFC] border border-gray-100 rounded-md cursor-pointer transition-all duration-300 hover:bg-zinc-100'>
                        <h3 className='font-semibold text-[32px] text-[#1F2937] flex justify-center pb-2'><FiVideo /></h3>
                        <p className='text-[18px] text-[#1F2937]'>Video</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CheckInCard;