import React from 'react';
import AuthForm from './AuthForm';
import { toggleSignIn, toggleSignUp, hideModals } from '../../utils/redux/slice/modalSlice';
import { useDispatch } from 'react-redux';

const SignUp = () => {
    const dispatch = useDispatch()

    return (
        <AuthForm
            mode="signup"
            toggleMode={() => {
                dispatch(toggleSignUp())
                dispatch(toggleSignIn())
            }}
            handleClose={() => dispatch(hideModals())}
        />
    );
};

export default SignUp
