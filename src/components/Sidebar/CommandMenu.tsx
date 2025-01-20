
import { Command } from "cmdk";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FiEye, FiLink, FiLogOut, FiPhone, FiPlus } from "react-icons/fi";

export const CommandMenu = ({
    open,
    setOpen,
}: {
    open:boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}) => {
    const [value, setValue] = useState("")

    // Toggle the menu when ⌘K is pressed
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                
                // 效果一样，比较长
                // setOpen((open) => {return !open});
                
                setOpen((open) => !open);
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <Command.Dialog
            open={open}
            onOpenChange={setOpen}
            label="Global Command Menu"
            className="fixed inset-0 bg-stone-950/50"
            onClick={() => setOpen(false)}
        >
            <div 
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-lg shadow border-stone-300 border overflow-hidden w-full"
            >
                <Command.Input
                    value={value}
                    onValueChange={setValue}
                    placeholder="What do you need?"
                    className="relative border-b border-stone-300 p-3 text-lg w-full placeholder:text-stone-400 focus:outline-none"
                />
                <Command.List className="p-3">
                    <Command.Empty>
                        No results found for {" "}
                        <span className="text-violet-500">"{value}"</span>
                    </Command.Empty>

                    <Command.Group heading="Team" className="text-sm mb-3 text-stone-400">
                        <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
                            <FiPlus />
                            Invite Member
                        </Command.Item>
                        <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
                            <FiEye />
                            See Org Chart
                        </Command.Item>
                    </Command.Group>

                    <Command.Group 
                        heading="Integrations"
                        className="text-sm text-stone-400 mb-3"
                    >
                        {/* 聚焦的时候显示鼠标 cursor-pointer
                        变换颜色 transition-colors */}
                        <Command.Item className="flex cursor-pointer transition-colors text-sm p-2 text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
                            <FiLink />
                            Link Services
                        </Command.Item>
                        <Command.Item className="flex cursor-pointer transition-colors text-sm p-2 text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
                            <FiPhone />
                            Contact Support
                        </Command.Item>
                    </Command.Group>
                    
                    <Command.Item className="flex cursor-pointer transition-colors text-sm p-2 bg-stone-950 text-stone-50 hover:bg-stone-700 rounded items-center gap-2">
                        <FiLogOut/>
                        Sign Out
                    </Command.Item>
                </Command.List>
            </div>
        </Command.Dialog>
    )
}

// export const CommandMenu = ({a, b}: {a:boolean, b:string}) => {
    
// }