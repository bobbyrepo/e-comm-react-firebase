import React from 'react';

const OrderSummary = ({ order }) => {

    return (
        <div className="col p-2 bg-white">
            {/* Table to display order summary */}
            <table className="min-w-full bg-white">
                <tbody>
                    <tr>
                        <td className="font-semibold">Bag total:</td>
                        <td className='text-right'>{order?.cartPrice} $</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Processing Fee:</td>
                        <td className='text-right'>{order?.processingFee} $</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Discount:</td>
                        <td className='text-right'>-{order?.discount} $</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Total Price:</td>
                        <td className='text-right'>{order?.orderPrice} $</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrderSummary;
