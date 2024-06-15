import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders, selectOrders } from '../utils/redux/slice/orderSlice';
import ProductsNotFound from '../ui/ProductsNotFound';
import ProductTable from '../components/Order/ProductTable ';
import ShippedToDetails from '../components/Order/ShippedToDetails';
import OrderSummary from '../components/Order/OrderSummary';

function Orders() {
    // Select orders from the Redux store
    const dispatch = useDispatch();
    const { orders } = useSelector(selectOrders);

    console.log(orders)
    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);


    // If there are no orders, display a message indicating no purchases have been made
    if (orders.length === 0) {
        return <ProductsNotFound text="You have not made any purchase yet" />;
    }

    return (
        <div className='py-10'>
            <h1 className='text-3xl font-semibold'>Order History</h1>
            <div className="flex flex-col gap-3 mt-8">
                {/* Map through the orders and render details for each order */}
                {orders.map((order, ind) => (
                    <div key={ind} className="row py-2 px-4 border border-neutral-500 rounded-2xl h-full">
                        <ProductTable products={order.products} />
                        <ShippedToDetails shippedTo={order.shippedTo} />
                        <OrderSummary order={order} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Orders;
