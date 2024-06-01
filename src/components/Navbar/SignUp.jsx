import React from 'react';
import AuthForm from './AuthForm';
import { toggleSignIn, toggleSignUp, hideModals } from '../../utils/redux/slice/modalSlice';
import { useDispatch } from 'react-redux';

const SignUp = () => {
    const dispatch = useDispatch()

    return (
        // Render the AuthForm component for sign-up mode
        <AuthForm
            mode="signup"
            // Toggle between sign-up and sign-in modes
            toggleMode={() => {
                dispatch(toggleSignUp())
                dispatch(toggleSignIn())
            }}
            // Handle closing of the modal
            handleClose={() => dispatch(hideModals())}
        />
    );
};

export default SignUp
