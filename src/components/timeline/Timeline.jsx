"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import callIcon from "@/assets/call.png";
import textIcon from "@/assets/text.png";
import videoIcon from "@/assets/video.png";
import TimelineControls from "./TimelineControls";

const Timeline = () => {

  // state
  const [timeline, setTimeline] = useState([]);
  const [mounted, setMounted] = useState(false);

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("timeline")) || [];
    setTimeline(data);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // icon function
  const getIcon = (type) => {
    if (type === "Call") return callIcon;
    if (type === "Text") return textIcon;
    if (type === "Video") return videoIcon;
    return callIcon;
  };

  // process data
  let processedTimeline = [...timeline];

  // Search
  processedTimeline = processedTimeline.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.type.toLowerCase().includes(search.toLowerCase())
  );

  // Filter
  if (filter !== "All") {
    processedTimeline = processedTimeline.filter(
      (item) => item.type === filter
    );
  }

  // Sort
  if (sort === "newest" || sort === "oldest") {
    processedTimeline.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return sort === "newest"
        ? dateB - dateA
        : dateA - dateB;
    });
  }

  return (
    <div className="bg-[#F8FAFC]">
      <div className="w-[80%] mx-auto py-20">

        <h1 className="text-[48px] font-bold mb-6 text-[#1F2937]">
          Timeline
        </h1>

        {/* Controls */}
        <TimelineControls
          filter={filter}
          setFilter={setFilter}
          sort={sort}
          setSort={setSort}
          search={search}
          setSearch={setSearch}
        />

        {/* Timeline List */}
        <div className="space-y-4">

          {timeline.length === 0 ? (
            <p className="text-gray-500 text-center p-4 bg-white border border-zinc-200 rounded-lg">
              No interactions yet.
            </p>
          ) : processedTimeline.length === 0 ? (
            <p className="text-gray-500 text-center p-4 bg-white border border-zinc-200 rounded-lg">
              No results found.
            </p>
          ) : (
            processedTimeline.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 bg-white border border-zinc-200 rounded-lg"
              >

                {/* Icon */}
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image
                    src={getIcon(item.type)}
                    alt={item.type}
                    width={24}
                    height={24}
                  />
                </div>

                {/* Content */}
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