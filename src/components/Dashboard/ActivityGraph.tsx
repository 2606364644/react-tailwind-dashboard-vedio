"use client"

import React, { useEffect } from "react";
import { FiUser } from "react-icons/fi";
import {
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Line,
    LineChart,
  } from "recharts";
import ChartsTest from "./ChartsTest";


const data = [
{
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
},
{
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
},
{
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
},
{
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
},
{
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
},
{
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
},
{
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
},
];

export const ActivityGraph = () => {

    return (
        <>
            <div className="col-span-8 grid border border-stone-300 rounded min-h-64 h-full">
                <div className="p-4 flex items-center gap-2">
                    <FiUser/>
                    <span className="font-medium">Activity</span>
                </div>
                <div className="font-medium">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart width={500} height={300} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                        <YAxis />
                        <Tooltip wrapperClassName="text-sm" labelClassName="text-xs"/>
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="col-span-4 flex justify border border-stone-300 rounded">
                <ChartsTest />
            </div>
        </>
    )
}

function render() {
    throw new Error("Function not implemented.");
}
