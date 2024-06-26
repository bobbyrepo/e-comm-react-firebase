import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputField from '../../ui/InputField';
import TextareaField from '../../ui/TextareaField';
import { validateFirstName, validateLastName, validateAddress, validateContact, validatePostal } from '../../helpers/validation';
import { MdClose } from 'react-icons/md';
import { processingFee, discount } from '../../utils/constants';
import { clearCart } from '../../utils/redux/slice/cartSlice';
import { hideOrderForm } from '../../utils/redux/slice/orderFormSlice';
import { addOrderToServer } from '../../utils/redux/slice/orderSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function OrderForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const cart = useSelector(state => state.cart)

    console.log(cart)

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [postal, setPostal] = useState('');
    const [errors, setErrors] = useState({ firstName: '', lastName: '', address: '', contact: '', postal: '' });

    // Close the order form
    const handleClose = () => {
        dispatch(hideOrderForm());
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form fields
        const firstNameError = validateFirstName(firstName);
        const lastNameError = validateLastName(lastName);
        const addressError = validateAddress(address);
        const contactError = validateContact(contact);
        const postalError = validatePostal(postal);

        // If there are validation errors, update the errors state
        if (firstNameError || lastNameError || addressError || contactError || postalError) {
            setErrors({ firstName: firstNameError, lastName: lastNameError, address: addressError, contact: contactError, postal: postalError });
        } else {
            // If no errors, clear the errors state and proceed with order submission
            setErrors({ firstName: '', lastName: '', address: '', contact: '', postal: '' });

            // Dispatch actions to add the order, hide the order form, and clear the cart
            dispatch(addOrderToServer({
                // products: cart.cartItems,
                // orderPrice: cart.cartTotal,
                processingFee,
                discount,
                payableAmount: (parseFloat(cart.cartTotal) + parseFloat(processingFee) - parseFloat(discount)).toFixed(2),
                shippedTo: { firstName, lastName, address, contact, postal }
            }))
            dispatch(hideOrderForm());
            dispatch(clearCart());

            // Navigate to home page and show success toast
            navigate("/")
            toast.success("Purchase successful 🙌")
        }
    };

    return (
        <div className="relative h-[100vh] w-full">
            {/* Overlay */}
            <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50 backdrop-blur"></div>
            <div className="absolute top-24 left-1/2 z-10 w-[500px] py-10 px-8 h-fit text-black text-center bg-white rounded-[30px] transform -translate-x-1/2">
                <div className="text-2xl font-medium">
                    <h1>Order Form</h1>
                    {/* Close button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-5 right-5 hover:scale-[108%]"
                    >
                        <MdClose className="text-[28px] text-neutral-600" />
                    </button>
                </div>

                {/* Order form */}
                <form onSubmit={handleSubmit} className="my-8">
                    <div className="flex gap-4">
                        <InputField
                            id="fname"
                            label="First Name"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            onBlur={() => setErrors({ ...errors, firstName: validateFirstName() })}
                            error={errors.firstName}
                        />
                        <InputField
                            id="lname"
                            label="Last Name"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            onBlur={() => setErrors({ ...errors, lastName: validateLastName() })}
                            error={errors.lastName}
                        />
                    </div>
                    <TextareaField
                        id="address"
                        label="Address"
                        type="textarea"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        onBlur={() => setErrors({ ...errors, address: validateAddress() })}
                        error={errors.address}
                    />
                    <div className="flex gap-4">
                        <InputField
                            id="contact"
                            label="Contact Number"
                            type="text"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            onBlur={() => setErrors({ ...errors, contact: validateContact() })}
                            error={errors.contact}
                        />
                        <InputField
                            id="postal"
                            label="Postal Code"
                            type="text"
                            value={postal}
                            onChange={(e) => setPostal(e.target.value)}
                            onBlur={() => setErrors({ ...errors, postal: validatePostal() })}
                            error={errors.postal}
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-rose-500 text-white text-xl rounded-full mx-auto mt-4"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default OrderForm;
