import React from 'react';

const ShippedToDetails = ({ shippedTo, orderedBy }) => {
    return (
        <div className="col p-2 bg-white">
            <table className="min-w-full bg-white">
                <tbody>
                    <tr>
                        <th className="text-left font-semibold">OrderedBy:</th>
                        <th className="text-left font-semibold">{orderedBy}</th>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="font-semibold">First Name:</td>
                        <td>{shippedTo.firstName}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Last Name:</td>
                        <td>{shippedTo.lastName}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Address:</td>
                        <td>{shippedTo.address}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Contact:</td>
                        <td>{shippedTo.contact}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Postal Code:</td>
                        <td>{shippedTo.postal}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ShippedToDetails;
