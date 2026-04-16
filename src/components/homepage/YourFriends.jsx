import Image from 'next/image';
import React from 'react';

const YourFriends = () => {
    return (
        <div className='pb-20'>
            <div className='max-w-[80%] mx-auto'>
                <h3 className='text-[24px] text-[#1F2937] font-semibold pb-4'>Your Friends</h3>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5'>
                    <div className='card text-center p-6 bg-white border border-gray-100 rounded-sm'>
                        <div className='flex justify-center mb-2'>
                            <Image src="https://randomuser.me/api/portraits/men/11.jpg" 
                            alt='friend' 
                            width={80} 
                            height={80} 
                            className='rounded-full'/>
                        </div>

                        <h3 className='font-semibold text-[20px] text-[#1F2937]'>David Kim</h3>
                        
                        <p className='text-[12px] text-[#64748B]'>62d ago</p>

                        <div className='flex justify-center gap-1 mt-2'>
                            <div className="badge bg-[#CBFADB] text-[12px] text-[##244D3F] uppercase rounded-full">hobby</div>
                            
                            <div className="badge bg-[#CBFADB] text-[12px] text-[##244D3F] uppercase rounded-full">travel</div>
                        </div>

                        <div className='flex justify-center mt-1.5'>
                            <div className="badge bg-[#CBFADB] text-[12px] text-[##244D3F] uppercase rounded-full">travel</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default YourFriends;