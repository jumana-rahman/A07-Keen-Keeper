import React from 'react';

const Banner = () => {
    return (
        <div className='pt-20 pb-10'>
            <div className='max-w-[80%] mx-auto text-center'>
                <h2 className='font-bold text-[48px] text-[#1F2937]'>Friends to keep close in your life</h2>
                
                <p className='text-[16px] text-[#64748B] max-w-137.5 mx-auto'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                relationships that matter most.</p>

                <button className='btn mt-5 bg-[#244D3F] font-semibold text-[16px] text-white rounded-sm hover:bg-[rgba(36,77,63,0.9)]'>+ Add a Freind</button>
            </div>
        </div>
    );
};

export default Banner;