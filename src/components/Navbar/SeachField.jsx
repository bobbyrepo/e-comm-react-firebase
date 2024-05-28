import React from 'react'
import { GoSearch } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";



function SeachField() {
    return (
        <div className=" flex bg-neutral-600">
            <div className="text-2xl py-2 px-3 text-neutral-400">
                <GoSearch />
            </div>
            <input type="text" className='w-[400px] h-10 text-lg bg-neutral-600 outline-none' />
            <div className="text-2xl py-2 px-3 text-neutral-400">
                <RxCross2 />
            </div>
        </div>
    )
}

export default SeachField