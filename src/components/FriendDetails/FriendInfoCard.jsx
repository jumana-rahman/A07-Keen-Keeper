import Image from 'next/image';
import React from 'react';
import { FiArchive } from 'react-icons/fi';
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';

const FriendInfoCard = ({ friend }) => {

    const getStatusColor = (status) => {
        if (status === "overdue") return "bg-[#EF4444]";
        if (status === "almost due") return "bg-[#EFAD44]";
        return "bg-[#244D3F]";
    };

    return (
        <div>
            <div className='card text-center px-6 py-8 bg-white border border-gray-100 rounded-sm'>

                <div className='flex justify-center mb-2'>
                    <Image
                        src={friend.picture}
                        alt={friend.name}
                        width={80}
                        height={80}
                        className='rounded-full'
                    />
                </div>

                <h3 className='font-semibold text-[20px] text-[#1F2937]'>
                    {friend.name}
                </h3>

                <p className='text-[12px] text-[#64748B] pb-2'>
                    {friend.days_since_contact}d ago
                </p>

                <div className='flex justify-center mt-1.5'>
                    <div className={`badge text-[12px] text-white uppercase rounded-full ${getStatusColor(friend.status)}`}>
                        {friend.status}
                    </div>
                </div>

                <div className='flex justify-center gap-1 mt-2'>
                    {friend.tags.map((tag, index) => (
                        <div
                            key={index}
                            className="badge bg-[#CBFADB] text-[12px] text-[#244D3F] uppercase rounded-full"
                        >
                            {tag}
                        </div>
                    ))}
                </div>

                <p className='text-[#64748B] text-[16px] font-medium italic max-w-63.5 mx-auto pt-5'>
                    {friend.bio}
                </p>

                <p className='text-[#64748B] text-[14px] max-w-63.5 mx-auto pt-2'>
                    {friend.email}
                </p>

            </div>

            <div className='space-y-3 mt-5'>
                <button className='btn bg-white w-full mx-auto flex items-center justify-center capitalize'>
                    <RiNotificationSnoozeLine />
                    Snooze 2 Weeks
                </button>

                <button className='btn bg-white w-full mx-auto flex items-center justify-center capitalize'>
                    <FiArchive />
                    archive
                </button>

                <button className='btn bg-white w-full mx-auto flex items-center justify-center capitalize text-[#EF4444]'>
                    <RiDeleteBinLine />
                    delete
                </button>
            </div>
        </div>
    );
};

export default FriendInfoCard;