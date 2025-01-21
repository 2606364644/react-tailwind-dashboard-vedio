import React from "react";
import { FiCalendar } from "react-icons/fi";

export const Tobar = () => {
  return (
    <div className="border-b px-4 pb-4">
      <div className="flex items-center mt-2">
        <div className="grid text-start">
          <span className="text-sm font-bold">🚀 Good morning, Tom!</span>
          <span className="text-xs text-stone-500">Tuesday, Aug 8th 2023</span>
        </div>

        <button className="ml-auto shadow px-2 py-1 rounded flex">
          <FiCalendar/>
          <span>Prev 6 Months</span>
        </button>
      </div>
    </div>
  )
}