"use client";

import React, {useState} from "react";
import { FiCommand, FiSearch } from "react-icons/fi";
import { CommandMenu } from "./CommandMenu";

export function Search() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="bg-stone-200 relative rounded flex items-center px-2 py-1 text-sm">
                <FiSearch className="mr-2 text-lg" />
                {/* 
                透明背景色  bg-transparent
                取消聚焦的外边框 focus:outline-none 
                满宽度填充 w-full
                占位符 className的placeholder
                设置占位符颜色 className的placeholder
                */}
                <input type="text" className="w-full bg-transparent placeholder:text-stone-400 focus:outline-none" placeholder="Search" />

                <span className="p-1 ml-auto flex items-center text-xs gap-0.5 shadow bg-stone-50 rounded ">
                    <FiCommand /> K
                </span>

                <CommandMenu open={open} setOpen={setOpen}/>
            </div>
        </>
    )
}