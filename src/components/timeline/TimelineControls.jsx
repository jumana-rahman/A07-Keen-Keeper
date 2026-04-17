"use client";

import { IoIosArrowDown } from "react-icons/io";

const TimelineControls = ({ filter, setFilter, sort, setSort, search, setSearch }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between">

      <div className="flex flex-col md:flex-row gap-4">

        {/* Filter */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn flex gap-2 text-[#64748B]">
            {filter === "All" ? "Filter Timeline" : filter}
            <IoIosArrowDown />
          </div>

          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box w-40 p-2 shadow">
            {["All", "Call", "Text", "Video"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => setFilter(item)}
                  className={filter === item ? "font-bold bg-[#244d3f] text-white" : ""}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Sort */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn flex gap-2 text-[#64748B]">
            {sort ? sort : "Sort"}
            <IoIosArrowDown />
          </div>

          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box w-40 p-2 shadow">
            <li>
              <button
                onClick={() => setSort("Newest")}
                className={
                  sort === "Newest"
                    ? "font-bold bg-[#244d3f] text-white"
                    : "text-[#64748B]"
                }
              >
                Newest
              </button>
            </li>

            <li>
              <button
                onClick={() => setSort("Oldest")}
                className={
                  sort === "Oldest"
                    ? "font-bold bg-[#244d3f] text-white"
                    : "text-[#64748B]"
                }
              >
                Oldest
              </button>
            </li>
          </ul>
        </div>

      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name or type..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input input-bordered w-full md:w-1/3"
      />

      
    </div>
  );
};

export default TimelineControls;