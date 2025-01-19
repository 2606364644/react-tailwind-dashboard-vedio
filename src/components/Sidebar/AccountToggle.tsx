import React from "react";
import {FiChevronDown, FiChevronUp} from "react-icons/fi"

export function AccountToggle () {
    return (
        <>
        <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
            <button className="flex p-0.5 hover:bg-stone-200 rounded 
            transition-colors relative gap-2 w-full items-center">
                <img
                src="https://api.dicebear.com/9.x/notionists/svg"
                alt="avatar"
                className="size-8 rounded shrink-0 bg-violet-500 shadow"
                />
                <div className="text-start">
                    <div className="text-sm font-bold block">Name</div>
                    <div className="text-xs block text-stone-500">Email</div>
                </div>
                <div className="ml-auto grid grid-cols-1">
                    <FiChevronUp className="text-sm" />
                    <FiChevronDown className="text-sm" />
                </div>
            </button>
            
        </div>
        </>
    )
}