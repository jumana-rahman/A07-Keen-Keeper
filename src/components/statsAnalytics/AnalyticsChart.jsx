"use client";

import { useEffect, useState } from "react";
import { Pie, PieChart, Tooltip, Legend, Cell } from "recharts";



const AnalyticsChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const timeline = JSON.parse(sessionStorage.getItem("timeline")) || [];

        let call = 0;
        let text = 0;
        let video = 0;

        timeline.forEach((item) => {
        if (item.type === "Call") call++;
        if (item.type === "Text") text++;
        if (item.type === "Video") video++;
        });

        setData([
        { name: "Call", value: call },
        { name: "Text", value: text },
        { name: "Video", value: video },
        ]);
    }, []);

    const COLORS = {
        Call: "#244D3F",
        Text: "#7E35E1",
        Video: "#37A163",
    };

    return (
        <div className='bg-[#F8FAFC]'>
            <div className="w-[80%] mx-auto py-20">
                <h1 className="text-[48px] font-bold mb-6 text-[#1F2937]">
                    Friendship Analytics
                </h1>

                {/* Pie Chart */}
                <div className='p-4 bg-white border border-zinc-200 rounded-lg'>
                    <h3 className='text-[#244D3F] text-[20px] font-medium pb-5 capitalize'>by interaction type</h3>

                    {data.every(item => item.value === 0) && (
                        <p className="text-center text-gray-500 text-lg flex justify-center mt-4">No interactions yet. <br/> Pie Chart will show when there is interaction available.</p>
                    )}

                    <div className="flex justify-center">
                        
                        <PieChart
                        width={400}
                        height={400}
                        style={{ maxWidth: "500px", aspectRatio: 1 }}
                        >
                            <Pie
                            data={data}
                            innerRadius="60%"
                            outerRadius="75%"
                            paddingAngle={2}
                            cornerRadius={10}
                            dataKey="value"
                            >
                            {data.map((entry, index) => (
                                <Cell key={index} fill={COLORS[entry.name]} />
                            ))}
                            </Pie>

                            <Tooltip />

                            {/* Legend with circle icons */}
                            <Legend
                            iconType="circle"
                            />
                        </PieChart>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default AnalyticsChart;