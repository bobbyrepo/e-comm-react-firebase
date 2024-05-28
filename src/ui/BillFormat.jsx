import React from 'react'

function BillFormat({ text, value }) {
    return (
        <div className="flex justify-between">
            <h1>{text}</h1>
            <h1 className='font-light'>{value}.00 rs</h1>
        </div>)
}

export default BillFormat