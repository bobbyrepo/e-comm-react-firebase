import React from 'react';

const ShippedToDetails = ({ shippedTo }) => {
    return (
        <div className="col p-2 bg-white">
            {/* Table to display shipping details */}
            <table className="min-w-full bg-white">
                <tbody>
                    {/* Table rows for shipping details */}
                    <tr>
                        <td className="font-semibold">First Name:</td>
                        <td>{shippedTo?.firstName}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Last Name:</td>
                        <td>{shippedTo?.lastName}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Address:</td>
                        <td>{shippedTo?.address}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Contact:</td>
                        <td>{shippedTo?.contact}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Postal Code:</td>
                        <td>{shippedTo?.postal}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ShippedToDetails;
