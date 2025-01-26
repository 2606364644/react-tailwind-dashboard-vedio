import React from "react";
import { Tobar } from "./Tobar";
import { Grid } from "./Grid";
import { ActivityGraph } from "./ActivityGraph";

export const Dashboard = () => {
    return (
        <div className="bg-white rounded-lg pb-4 shadow h-[200hv]">
            <Tobar />
            <Grid/>
        </div>
    )
}