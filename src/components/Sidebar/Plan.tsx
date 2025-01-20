import react from "react"

export const Plan = () => {
  return (
    <div className="border-t border-stone-300 flex text-center relative px-2 py-4">
      <div className="text-start">
        <div className="text-xs text-stone-950 font-bold">
          Enterprise
        </div>
        <div className="text-xs text-stone-500">
          Pay as you go
        </div>
      </div>
      
      <button className="ml-auto font-medium text-xs px-2 py-1 border rounded bg-stone-200 transition-colors hover:bg-stone-300">
        Support
      </button>
    </div>
  )
}