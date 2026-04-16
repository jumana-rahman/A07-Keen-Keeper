import React from 'react';

const Counters = () => {
    return (
        <div className='mb-10'>
            <div className='max-w-[80%] mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5 mb-10'>
                    <div className='card text-center p-8 bg-white border border-gray-100 rounded-sm'>
                        <h3 className='font-semibold text-[32px] text-[#1F2937]'>10</h3>
                        <p className='text-[18px] text-[#64748B]'>Total Friends</p>
                    </div>

                    <div className='card text-center p-8 bg-white border border-gray-100 rounded-sm'>
                        <h3 className='font-semibold text-[32px] text-[#1F2937]'>3</h3>
                        <p className='text-[18px] text-[#64748B]'>On Track</p>
                    </div>

                    <div className='card text-center p-8 bg-white border border-gray-100 rounded-sm'>
                        <h3 className='font-semibold text-[32px] text-[#1F2937]'>6</h3>
                        <p className='text-[18px] text-[#64748B]'>Need Attention</p>
                    </div>

                    <div className='card text-center p-8 bg-white border border-gray-100 rounded-sm'>
                        <h3 className='font-semibold text-[32px] text-[#1F2937]'>12</h3>
                        <p className='text-[18px] text-[#64748B]'>Interactions This Month</p>
                    </div>
                </div>

                <div className='divider'></div>
            </div>
        </div>
    );
};

export default Counters;