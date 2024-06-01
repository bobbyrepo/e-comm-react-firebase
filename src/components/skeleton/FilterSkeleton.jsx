import React from 'react'
import uncheck from "../../assets/uncheck.png"


function FilterSkeleton() {
    return (
        <div className='px-3 py-2 border-1 rounded-xl border-stale-300'>
            <h1 className='text-xl font-semibold'>Filters</h1>
            <div className='my-3 w-full h-[1px] bg-slate-200'></div>
            <h1 className='my-3 text-lg font-semibold'>Category</h1>
            <div className="flex flex-col gap-2 mt-2">
                {[...Array(6)].map((ind) => (
                    <button key={ind} className="flex gap-2 items-center placeholder-glow">
                        <img src={uncheck} className='w-4' alt="" />
                        <h2 className='text-md w-full placeholder'></h2>
                    </button>
                ))}
            </div>
        </div>)
}

export default FilterSkeleton