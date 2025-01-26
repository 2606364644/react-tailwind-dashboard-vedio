import React from "react"
import { StartGrads } from "./StartGards"
import { ActivityGraph } from "./ActivityGraph"
import { UsageRadar } from "./UsageRadar"
import { RecentTransactions } from "./RecentTransactions"

export const Grid = () => {
    return (
        <div className="grid gap-3 px-4 grid-cols-12">
            <StartGrads />
            <ActivityGraph />
            {/* <UsageRadar /> */}
            <RecentTransactions />
        </div>
        
    )
}