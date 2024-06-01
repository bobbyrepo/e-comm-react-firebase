import React from 'react';
import { useNavigate } from 'react-router-dom';

// Component to display a message when no products are found.
function ProductsNotFound({ text }) {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col gap-4 items-center mt-44'>
            <h1 className='text-xl font-medium'>{text}</h1>
            {/* Button to navigate back to the main shopping page */}
            <button
                onClick={() => navigate("/")}
                className='px-4 py-2 text-lg font-semibold text-white bg-rose-500 rounded-full'>Continue Shopping</button>
        </div>
    );
}

export default ProductsNotFound;
