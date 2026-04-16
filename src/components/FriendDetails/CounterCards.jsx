import React from 'react';

const CounterCards = ({friend }) => {
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5'>
                <div className='card text-center p-8 bg-white border border-gray-100 rounded-md'>
                    <h3 className='font-semibold text-[32px] text-[#1F2937]'>{friend.days_since_contact}</h3>
                    <p className='text-[18px] text-[#64748B]'>Days Since Contact</p>
                </div>

                <div className='card text-center p-8 bg-white border border-gray-100 rounded-md'>
                    <h3 className='font-semibold text-[32px] text-[#1F2937]'>{friend.goal}</h3>
                    <p className='text-[18px] text-[#64748B]'>Goal (Days)</p>
                </div>

                <div className='card text-center p-8 bg-white border border-gray-100 rounded-md'>
                    <h3 className='font-semibold text-[32px] text-[#1F2937]'>{friend.next_due_date}</h3>
                    <p className='text-[18px] text-[#64748B]'>Next Due</p>
                </div>
            </div>
        </div>
    );
};

export default CounterCards;