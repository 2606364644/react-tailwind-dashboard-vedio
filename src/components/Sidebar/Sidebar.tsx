import React from "react";
import { AccountToggle } from "./AccountToggle";
import { Search } from "./Search";
import { Plan } from "./Plan";
import { RouteSelect } from "./RouteSelect";

export function Sidebar () {
   return (
    <div className="grid grid-cols-1 outline-none">
        <div className="overflow-y-scroll 
        sticky top-4 h-[calc(100vh-32px-48px)]">
            <AccountToggle />
            <Search />
            <RouteSelect/>
        </div>

        <Plan />
    </div>
   )
}
