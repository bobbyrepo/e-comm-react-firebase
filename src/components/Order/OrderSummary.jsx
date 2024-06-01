import React from 'react';

const OrderSummary = ({ order }) => {

    return (
        <div className="col p-2 bg-white">
            <table className="min-w-full bg-white">
                <tbody>
                    <tr>
                        <td className="font-semibold">Bag total:</td>
                        <td className='text-right'>{order.cartTotal}.00 rs</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Processing Fee:</td>
                        <td className='text-right'>{order.processingFee}.00 rs</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Discount:</td>
                        <td className='text-right'>-{order.discount}.00 rs</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Total Price:</td>
                        <td className='text-right'>{order.payableAmmount}.00 rs</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrderSummary;
