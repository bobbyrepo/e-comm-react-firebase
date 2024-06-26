import React, { useState } from 'react';
import InputField from '../../ui/InputField';
import PasswordInput from '../../ui/PasswordInput';
import FormHeader from '../../ui/FormHeader';
import { addAuth } from '../../utils/redux/slice/authSlice';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config.js/firebase';
import { hideModals } from '../../utils/redux/slice/modalSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { validateEmail, validatePassword, validateConfirmPassword } from '../../helpers/validation';
import { baseApi } from '../../api/axiosInstance';
import Cookies from 'js-cookie';


// Form component for user authentication (sign in and sign up).
// mode - The mode of the form: 'signin' or 'signup'.
// toggleMode - Function to toggle between sign in and sign up modes.
// handleClose - Function to handle the form closing.
const AuthForm = ({ mode, toggleMode, handleClose }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({ email: '', password: '', confirmPassword: '' });

    const toggleShowPassword = () => setShowPassword(!showPassword);
    const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);


    //   Function to log in a user with email and password.
    const loginAccount = async () => {
        try {
            const userCredential = await baseApi.post("/api/user/login", { email, password })
            const user = userCredential.data;
            console.log(user.token)
            Cookies.remove('accessToken', { path: '/' });
            Cookies.set("accessToken", user.token, { expires: 7, path: "/", secure: true })
            console.log(
                Cookies.get("accessToken")
            )
            dispatch(addAuth({
                user: {
                    email: user.email,
                    accessToken: user.token,
                    uid: user.uid,
                },
            }));
            toast(`You made it ${user.email.split("@")[0]}!`, {
                icon: '🥳 ',
            });
            dispatch(hideModals());
        } catch (error) {
            // console.error('Error during login:', error);
            toast.error("Invalid Credentials");
        }
    };


    //  Function to create a new user account with email and password.
    const createAccount = async () => {
        try {
            const register = await baseApi.post("/api/user/register", { email, password })
            if (register.status == 201) {
                await loginAccount();
            }
        } catch (error) {
            // console.error('Error during account creation:', error);
            if (error.response && error.response.status === 400) {
                toast.error("Email Already Exists");
            } else {
                toast.error("Account Creation Error");
            }
        }
    };

    // Function to handle form submission.
    // Validates form inputs and performs sign in or sign up actions accordingly.
    const handleSubmit = (e) => {
        e.preventDefault();
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);
        const confirmPasswordError = mode === 'signup' ? validateConfirmPassword(confirmPassword, password) : '';
        if (emailError || passwordError || confirmPasswordError) {
            setErrors({ email: emailError, password: passwordError, confirmPassword: confirmPasswordError });
        } else {
            setErrors({ email: '', password: '', confirmPassword: '' });
            if (mode === "signup") {
                createAccount();
            } else {
                loginAccount();
            }
        }
    };

    return (
        <div className="relative h-[100vh] w-full">
            <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50 backdrop-blur"></div>
            <div className="absolute top-24 left-1/2 z-10 w-[500px] py-16 h-fit text-black text-center bg-white rounded-[30px] transform -translate-x-1/2">
                <FormHeader
                    title={mode === 'signin' ? 'Welcome Back' : 'Welcome to'}
                    subtitle={mode === 'signin' ? 'SIGN IN' : 'SIGN UP'}
                    handleClose={handleClose}
                />
                <form onSubmit={handleSubmit}>
                    <InputField
                        id="email"
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => setErrors({ ...errors, email: validateEmail() })}
                        error={errors.email}
                    />
                    <PasswordInput
                        id="password"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={() => setErrors({ ...errors, password: validatePassword() })}
                        showPassword={showPassword}
                        toggleShowPassword={toggleShowPassword}
                        error={errors.password}
                    />
                    {mode === 'signup' && (
                        <PasswordInput
                            id="confirmPassword"
                            label="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            onBlur={() => setErrors({ ...errors, confirmPassword: validateConfirmPassword() })}
                            showPassword={showConfirmPassword}
                            toggleShowPassword={toggleShowConfirmPassword}
                            error={errors.confirmPassword}
                        />
                    )}
                    <button
                        type="submit"
                        className="px-4 py-2 bg-rose-500 text-white text-xl rounded-full mx-auto mt-4"
                    >
                        {mode === 'signin' ? 'Sign In' : 'Sign Up'}
                    </button>
                    <div className="mt-1 leading-3">
                        <h1>{mode === 'signin' ? 'New to STOP SHOP?' : 'Already have an account?'}</h1>
                        <button type="button" onClick={toggleMode} className="text-rose-400">
                            {mode === 'signin' ? 'Create an account' : 'Sign In'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AuthForm;
