import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { hideOrderModal } from '../../utils/redux/slice/orderModalSlice';
import InputField from '../../ui/InputField';
import TextareaField from '../../ui/TextareaField';
import { MdClose } from 'react-icons/md';

function OrderForm() {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [postal, setPostal] = useState('');
    const [errors, setErrors] = useState({ firstName: '', lastName: '', address: '', contact: '', postal: '' });

    const handleClose = () => {
        dispatch(hideOrderModal());
    };

    const validateFirstName = () => {
        if (!firstName) return 'First Name is required';
        return '';
    };

    const validateLastName = () => {
        if (!lastName) return 'Last Name is required';
        return '';
    };

    const validateAddress = () => {
        if (!address) return 'Address is required';
        return '';
    };

    const validateContact = () => {
        if (!contact) return 'Contact Number is required';
        const contactRegex = /^[0-9]+$/;
        if (!contactRegex.test(contact)) return 'Contact Number must be numeric';
        if (contact.length < 10 || contact.length > 15) return 'Contact Number must be between 10 and 15 digits';
        return '';
    };

    const validatePostal = () => {
        if (!postal) return 'Postal Code is required';
        const postalRegex = /^[0-9]+$/;
        if (!postalRegex.test(postal)) return 'Postal Code must be numeric';
        return '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const firstNameError = validateFirstName();
        const lastNameError = validateLastName();
        const addressError = validateAddress();
        const contactError = validateContact();
        const postalError = validatePostal();

        if (firstNameError || lastNameError || addressError || contactError || postalError) {
            setErrors({ firstName: firstNameError, lastName: lastNameError, address: addressError, contact: contactError, postal: postalError });
        } else {
            setErrors({ firstName: '', lastName: '', address: '', contact: '', postal: '' });
            // Dispatch the form data or handle it as necessary
            dispatch(hideOrderModal());
        }
    };

    return (
        <div className="relative h-[100vh] w-full">
            <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50 backdrop-blur"></div>
            <div className="absolute top-24 left-1/2 z-10 w-[500px] py-10 px-8 h-fit text-black text-center bg-white rounded-[30px] transform -translate-x-1/2">
                <div className="text-2xl font-medium">
                    <h1>Order Form</h1>
                    <button
                        onClick={handleClose}
                        className="absolute top-5 right-5 hover:scale-[108%]"
                    >
                        <MdClose className="text-[28px] text-neutral-600" />
                    </button>
                </div>

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
