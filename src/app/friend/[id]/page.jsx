import Image from 'next/image';
import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { FiArchive, FiVideo } from 'react-icons/fi';
import { MdOutlineTextsms } from 'react-icons/md';
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';

const FriendPage = async ({params}) => {
    const {id} = await params;
    console.log(id, "params");
    return (
        <div className='bg-[#F8FAFC] py-20'>
            <div className='max-w-[80%] mx-auto'>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-6'>
                    {/* left-column */}
                    <div> 
                        <div className='card text-center px-6 py-10 bg-white border border-gray-100 rounded-sm'> 
                            <div className='flex justify-center mb-2'> 
                                <Image src="https://randomuser.me/api/portraits/men/11.jpg" alt='friend' width={80} height={80} className='rounded-full'/> 
                            </div> 
                            
                            <h3 className='font-semibold text-[20px] text-[#1F2937]'>David Kim</h3> 
                            
                            <p className='text-[12px] text-[#64748B]'>62d ago</p> 

                            <div className='flex justify-center mt-1.5'> 
                                <div className="badge bg-[#CBFADB] text-[12px] text-[##244D3F] uppercase rounded-full">travel</div> 
                            </div> 
                            
                            <div className='flex justify-center gap-1 mt-2'> 
                                
                                <div className="badge bg-[#CBFADB] text-[12px] text-[##244D3F] uppercase rounded-full">hobby</div> 
                                
                                <div className="badge bg-[#CBFADB] text-[12px] text-[##244D3F] uppercase rounded-full">travel</div> 
                            </div> 

                            <p className='text-[#64748B] text-[16px] font-medium italic max-w-63.5 mx-auto pt-2'> "Former colleague, great mentor" </p>
                            
                            <p className='text-[#64748B] text-[14px] max-w-63.5 mx-auto pt-2'> email@gmail.com </p>

                        </div> 

                        <div className='space-y-3.5 mt-8'>
                            <button className='btn bg-white w-full mx-auto flex items-center justify-center capitalize'> <RiNotificationSnoozeLine />Snooze 2 Weeks</button>

                            <button className='btn bg-white w-full mx-auto flex items-center justify-center capitalize'> <FiArchive />archive</button>

                            <button className='btn bg-white w-full mx-auto flex items-center justify-center capitalize text-[#EF4444]'> <RiDeleteBinLine />delete</button>

                            
                        </div>
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