import React from 'react'

function ProductListSkeleton() {
    return (
        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2">
            {/* Map through products and render ProductCard component for each */}
            {

                [...Array(10)]
                    .map((ind) =>
                        <div className='mb-3 placeholder-glow'>
                            <div className='w-full py-2 px-3 outline rounded outline-stone-100 h-full hover:scale-[101%] duration-150'>
                                {/* Link to the product details page */}
                                <div className='mx-auto h-[200px] w-full object-contain placeholder ' ></div >
                                <div className="mt-4 grid gap-1 text-neutral-800">
                                    <h1 className='font-semibold line-clamp-1 w-[80%] placeholder '> </h1>
                                    <h2 className='line-clamp-2 text-neutral-600 w-[100%] placeholder '></h2>
                                    <h2 className='line-clamp-2 text-neutral-600 w-[40%] placeholder '></h2>
                                    <h2 className='text-neutral-600 w-[30%] placeholder '> </h2>
                                    <h2 className='font-semibold w-[50%] placeholder '> <span className='font-normal' > </span></h2>
                                </div>
                                {/* Button to add item to cart */}
                                <div className="flex justify-center">
                                    <button
                                        className='mt-2 w-full mb-1 px-3 py-1 placeholder '>
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>)
}

export default ProductListSkeleton