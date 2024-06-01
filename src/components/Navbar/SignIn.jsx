import React from 'react';
import AuthForm from './AuthForm';
import { toggleSignIn, toggleSignUp, hideModals } from '../../utils/redux/slice/modalSlice';
import { useDispatch } from 'react-redux';

const SignIn = () => {
    const dispatch = useDispatch()

    return (
        // Render the AuthForm component for sign-in mode
        <AuthForm
            mode="signin"
            // Toggle between sign-in and sign-up modes
            toggleMode={() => {
                dispatch(toggleSignIn())
                dispatch(toggleSignUp())
            }}
            // Handle closing of the modal
            handleClose={() => dispatch(hideModals())}
        />
    );
};

export default SignIn
