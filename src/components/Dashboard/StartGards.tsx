import React from "react"

export const StartGrads = () => {
    return (
        <div className="col-span-12 flex item-center justify-between mt-4 gap-3">
            <Card
                title="Gross Revenue"
                value="$120,054.24"
                pillText="2.75%"
                trend="up"
                period="From Jan 1st - Jul 31st"
            />
            <Card
                title="Avg Order"
                value="$27.97"
                pillText="1.01%"
                trend="down"
                period="From Jan 1st - Jul 31st"
            />
            <Card
                title="Trailing Year"
                value="$278,054.24"
                pillText="60.75%"
                trend="up"
                period="Previous 365 days"
            />
        </div>
    )
}

const Card = ({
    title,
    value,
    pillText,
    trend,
    period,
}: {
    title: string
    value: string
    pillText: string
    trend: "up" | "down"
    period: string
}) => {
    return(
        <div className="border grid p-4 w-full rounded">
            <span className="text-sm text-stone-500">
                {title}
            </span>
            <span className="text-3xl font-bold my-2">
                {value}
            </span>
            <span className="text-xs text-stone-500 mt-6">
                {period}
            </span>
        </div>
    )
}