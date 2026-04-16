"use client";
import FriendInfoCard from '@/components/FriendDetails/FriendInfoCard';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { FiVideo } from 'react-icons/fi';
import { MdOutlineTextsms } from 'react-icons/md';
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

    if (!friend) return <p className="flex justify-center py-10"><RiseLoader color="#244D3F"/></p>;

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
                        {/* Counter Part */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5'>
                            <div className='card text-center p-8 bg-white border border-gray-100 rounded-md'>
                                <h3 className='font-semibold text-[32px] text-[#1F2937]'>62</h3>
                                <p className='text-[18px] text-[#64748B]'>Days Since Contact</p>
                            </div>

                            <div className='card text-center p-8 bg-white border border-gray-100 rounded-md'>
                                <h3 className='font-semibold text-[32px] text-[#1F2937]'>30</h3>
                                <p className='text-[18px] text-[#64748B]'>Goal (Days)</p>
                            </div>

                            <div className='card text-center p-8 bg-white border border-gray-100 rounded-md'>
                                <h3 className='font-semibold text-[32px] text-[#1F2937]'>Feb 27, 2026</h3>
                                <p className='text-[18px] text-[#64748B]'>Next Due</p>
                            </div>
                        </div>

                        {/* Goal Part */}
                        <div className='card p-8 bg-white border border-gray-100 rounded-md'>
                                <div className='flex justify-between items-center gap-1.5'>
                                    <h3 className='font-medium text-[20px] text-[#1F2937] capitalize'>relationship goal</h3>

                                    <button className='btn'>Edit</button>
                                </div>
                                <p className='text-[18px] text-[#64748B] pt-4'>Connect every <span className='font-bold text-[#1F2937]'>30 days</span></p>
                        </div>

                        {/* Quick check-in part */}
                        <div className='card p-8 bg-white border border-gray-100 rounded-md'>
                            <h3 className='font-medium text-[20px] text-[#1F2937] capitalize mb-4'>quick check-in</h3>

                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5'>
                                <div className=' text-center p-4 bg-[#F8FAFC] border border-gray-100 rounded-md cursor-pointer transition-all duration-300 hover:bg-zinc-100'>
                                    <h3 className='font-semibold text-[32px] text-[#1F2937] flex justify-center pb-2'><BiPhoneCall /></h3>
                                    <p className='text-[18px] text-[#1F2937]'>Call</p>
                                </div>

                                <div className=' text-center p-4 bg-[#F8FAFC] border border-gray-100 rounded-md cursor-pointer transition-all duration-300 hover:bg-zinc-100'>
                                    <h3 className='font-semibold text-[32px] text-[#1F2937] flex justify-center pb-2'><MdOutlineTextsms /></h3>
                                    <p className='text-[18px] text-[#1F2937]'>Text</p>
                                </div>

                                <div className=' text-center p-4 bg-[#F8FAFC] border border-gray-100 rounded-md cursor-pointer transition-all duration-300 hover:bg-zinc-100'>
                                    <h3 className='font-semibold text-[32px] text-[#1F2937] flex justify-center pb-2'><FiVideo /></h3>
                                    <p className='text-[18px] text-[#1F2937]'>Call</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default FriendPage;