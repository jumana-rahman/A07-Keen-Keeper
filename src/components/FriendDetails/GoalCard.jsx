import React from 'react';

const GoalCard = ({friend}) => {
    return (
        <div>
            <div className='card p-8 bg-white border border-gray-100 rounded-md'>
                <div className='flex justify-between items-center gap-1.5'>
                    <h3 className='font-medium text-[20px] text-[#1F2937] capitalize'>relationship goal</h3>

                    <button className='btn'>Edit</button>
                </div>
                <p className='text-[18px] text-[#64748B] pt-4'>Connect every <span className='font-bold text-[#1F2937]'>{friend.goal} days</span></p>
            </div>
        </div>
    );
};

export default GoalCard;