import React from 'react';
import { GoSearch } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";


// Component for displaying a search field.
// search - The current search query.
// handleInputChange - Function to handle input change in the search field.
// setShowSearch - Function to control the visibility of the search field.
function SeachField({ search, handleInputChange, setShowSearch }) {

    return (
        <div className="flex bg-neutral-600">
            <div className="text-2xl py-2 px-3 text-neutral-400">
                <GoSearch />
            </div>
            <input onChange={handleInputChange} value={search} type="text" className='w-[400px] h-10 text-lg bg-neutral-600 outline-none' />
            <div
                onClick={() => setShowSearch(false)}
                className="text-2xl py-2 px-3 text-neutral-400">
                <RxCross2 />
            </div>
        </div>
    );
}

export default SeachField;
