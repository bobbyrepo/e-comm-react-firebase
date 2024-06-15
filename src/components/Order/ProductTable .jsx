import React from 'react';

const ProductTable = ({ products }) => {
    return (
        <div className="col p-2">
            {/* Table to display products */}
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        {/* Table headers for products and quantity */}
                        <th className="text-left font-semibold">Products</th>
                        <th className="text-right font-semibold">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Map through products to render each product */}
                    {products?.map((product, ind) => (
                        <tr key={ind}>
                            <td className="line-clamp-1">{product?.product?.title}</td>
                            <td className="text-right">x{product?.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
