import React from 'react';
import { useSelector } from 'react-redux';
import { selectOrders } from '../utils/redux/slice/orderSlice';
import ProductsNotFound from '../ui/ProductsNotFound';
import ProductTable from '../components/Order/ProductTable ';
import ShippedToDetails from '../components/Order/ShippedToDetails';
import OrderSummary from '../components/Order/OrderSummary';

function Orders() {
    const { orders } = useSelector(selectOrders);

    if (orders.length === 0) {
        return <ProductsNotFound text="You have not made any purchase yet" />;
    }

    return (
        <div className='py-10'>
            <h1 className='text-3xl font-semibold'>Order History</h1>
            <div className="flex flex-col gap-3 mt-8">
                {orders.map((order, ind) => (
                    <div key={ind} className="row py-2 px-4 border border-neutral-500 rounded-2xl h-full">
                        <ProductTable products={order.products} />
                        <ShippedToDetails shippedTo={order.shippedTo} orderedBy={order.orderedBy} />
                        <OrderSummary order={order} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Orders;
