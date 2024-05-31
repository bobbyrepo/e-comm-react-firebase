import React from 'react';
import AuthForm from './AuthForm';
import { toggleSignIn, toggleSignUp, hideModals } from '../../utils/redux/slice/modalSlice';
import { useDispatch } from 'react-redux';

const SignIn = () => {
    const dispatch = useDispatch()

    return (
        <AuthForm
            mode="signin"
            toggleMode={() => {
                dispatch(toggleSignIn())
                dispatch(toggleSignUp())
            }}
            handleClose={() => dispatch(hideModals())}
        />
    );
};

export default SignIn
