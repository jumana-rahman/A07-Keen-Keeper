"use client";

import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import callIcon from "@/assets/call.png";
import textIcon from "@/assets/text.png";
import videoIcon from "@/assets/video.png";
import Image from 'next/image';

const Timeline = () => {
  const [timeline, setTimeline] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("timeline")) || [];
    }
    return [];
  });

  const [filter, setFilter] = useState("All");

  const getIcon = (type) => {
    if (type === "Call") return callIcon;
    if (type === "Text") return textIcon;
    if (type === "Video") return videoIcon;
    return callIcon; // fallback
  };

  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

    return (
        <div className='bg-[#F8FAFC]'>
            <div className="w-[80%] mx-auto py-20">
      
                {/* Heading */}
                <h1 className="text-[48px] font-bold mb-6 text-[#1F2937]">
                    Timeline
                </h1>

                {/* Dropdown */}

                <div className="dropdown dropdown-bottom mb-6">
  
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn m-1 flex items-center justify-center gap-2 text-[#64748B] text-[18px]"
                    >
                        {filter === "All" ? "Filter Timeline" : filter}
                        <IoIosArrowDown />
                    </div>

                    <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
                    >
                        <li>
                        <button 
                            onClick={() => setFilter("All")}
                            className={filter === "All" ? "font-bold bg-[#244d3f] text-white" : ""}>
                            All
                            </button>
                        </li>
                        
                        <li>
                            <button 
                            onClick={() => setFilter("Call")}
                            className={filter === "Call" ? "font-bold bg-[#244d3f] text-white" : ""}>
                                Call
                            </button>
                        </li>

                        <li>
                            <button 
                            onClick={() => setFilter("Text")}
                            className={filter === "Text" ? "font-bold bg-[#244d3f] text-white" : ""}>
                                Text
                            </button>
                        </li>

                        <li>
                            <button 
                            onClick={() => setFilter("Video")}
                            className={filter === "Video" ? "font-bold bg-[#244d3f] text-white" : ""}>
                                Video
                            </button>
                        </li>
                    </ul>

                </div>

                {/* Timeline List */}
                <div className="space-y-4">
                    
                    
                    {timeline.length === 0 ? (
                    <p className="text-gray-500 text-center p-4 bg-white border border-zinc-200 rounded-lg">No interactions yet.</p>
                    ) : (
                        
                    filteredTimeline.map((item) => (
                        
                        <div
                        key={item.id}
                        className="flex items-center gap-4 p-4 bg-white border border-zinc-200 rounded-lg"
                        >
                        
                            <div className="w-8 h-8 flex items-center justify-center">
                                <Image
                                    src={getIcon(item.type)}
                                    alt={item.type}
                                    width={50}
                                    height={50}
                                />
                            </div>  

                            <div>
                                <p className="text-[20px]">
                                    <span className="font-medium text-[#244D3F]">
                                        {item.type}
                                    </span>{" "}
                                    <span className="text-[#64748B] text-[18px]">
                                        with {item.title.split("with ")[1]}
                                    </span>
                                </p>
                                <p className="text-[#64748B] text-[16px] font-medium">
                                {item.date}
                                </p>
                            </div>

                        </div>
                    ))
                    )}

                </div>                      
            </div>
            
        </div>
    );
};

export default Timeline;