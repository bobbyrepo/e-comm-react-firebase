import React from 'react'

function SearchCardsList({ searchList }) {
    return (
        <div className="absolute p-2 bg-neutral-500 flex flex-col w-full max-h-[400px]">
            {
                searchList.length == 0 && <h1 className='px-8'>No results Found</h1>
            }
            <div className="flex flex-col gap-2 overflow-y-auto overflow-hidden">
                {
                    searchList.map(item =>
                        <>
                            <div className="flex gap-4 text-white">
                                <img src={item.image} className='w-[70px] aspect-[5/6] rounded object-cover' alt="" />
                                <div className="flex flex-col">
                                    <h1 className='line-clamp-1'>{item.title}</h1>
                                    <h1 >{item.category}</h1>
                                    <h1 >Rating : {item.rating.rate}</h1>
                                </div>
                            </div>
                            <hr className='w-full' />
                        </>
                    )
                }
            </div>
        </div>)
}

export default SearchCardsList