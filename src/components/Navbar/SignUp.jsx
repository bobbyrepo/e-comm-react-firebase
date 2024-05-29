import React, { useEffect, useState } from 'react'
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { MdClose } from "react-icons/md";

function SignUp({ setShowSignIn, setShowSignUp }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({ email: '', password: '' });

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const validateEmail = () => {
        if (!email) {
            return 'Email is required';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return 'Invalid email address';
        }
        return '';
    };

    const validatePassword = () => {
        if (!password) {
            return 'Password is required';
        }
        if (password.length < 6) {
            return 'Password must be at least 6 characters';
        }
        return '';
    };

    const validateConfirmPassword = () => {
        if (!confirmPassword) {
            return 'Password is required';
        }
        if (confirmPassword.length < 6) {
            return 'Password must be at least 6 characters';
        }
        return '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailError = validateEmail();
        const passwordError = validatePassword();
        const confirmPasswordError = validateConfirmPassword();
        if (emailError || passwordError) {
            setErrors({ email: emailError, password: passwordError, confirmPassword: confirmPasswordError });
        } else {
            setErrors({ email: '', password: '', confirmPassword: '' });
            // Proceed with form submission
            console.log('Form submitted:', { email, password, confirmPassword });
        }
    };

    const handleSignUpShow = () => {
        setShowSignUp(false)
    }
    const toggleSignInUp = () => {
        setShowSignIn(true)
        setShowSignUp(false)
    }


    return (
        <div class="relative h-[100vh] w-full">
            <div class="absolute top-0 left-0 h-full w-full bg-black opacity-50 backdrop-blur"></div>
            <div class="absolute -top-8 left-1/2 z-10 w-[500px] h-fit text-black text-center bg-white rounded-[30px] transform -translate-x-1/2">
                <button
                    onClick={handleSignUpShow}
                    className="absolute top-5 right-5 hover:scale-[108%]">
                    <MdClose className='text-[28px] text-neutral-600' />
                </button>
                <div className="my-16">
                    <div className=" text-3xl font-medium">
                        <h1 class="text-2xl text-black">Welcome to </h1>
                        <h1 class="text-black">STOP SHOP</h1>
                        <h1 class="text-lg text-rose-500">SIGN UP</h1>
                    </div>
                    <div className="flex flex-col gap-4 mt-10">
                        <div className="flex flex-col gap-1 items-start w-[320px] mx-auto">
                            <label htmlFor="email" className="text-lg">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={() => setErrors({ ...errors, email: validateEmail() })}
                                className="text-xl px-2 py-2 border border-neutral-900 outline-none w-full"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                        <div className="flex flex-col gap-1 items-start w-[320px] mx-auto">
                            <label htmlFor="password" className="text-lg">Password</label>
                            <div className="relative w-full">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onBlur={() => setErrors({ ...errors, password: validatePassword() })}
                                    className="text-xl pl-2 py-2 pr-12 border border-neutral-900 outline-none w-full"
                                />
                                <button
                                    type="button"
                                    onClick={toggleShowPassword}
                                    className="absolute inset-y-0 right-0 px-2 bg-white flex items-center border border-neutral-900"
                                >
                                    {showPassword ? (
                                        <VscEyeClosed className="text-2xl text-gray-500" />
                                    ) : (
                                        <VscEye className="text-2xl text-gray-500" />
                                    )}
                                </button>
                            </div>
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>
                        <div className="flex flex-col gap-1 items-start w-[320px] mx-auto">
                            <label htmlFor="password" className="text-lg">Confirm Password</label>
                            <div className="relative w-full">
                                <input
                                    id="password"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    onBlur={() => setErrors({ ...errors, confirmPassword: validateConfirmPassword() })}
                                    className="text-xl pl-2 py-2 pr-12 border border-neutral-900 outline-none w-full"
                                />
                                <button
                                    type="button"
                                    onClick={toggleShowConfirmPassword}
                                    className="absolute inset-y-0 right-0 px-2 bg-white flex items-center border border-neutral-900"
                                >
                                    {showConfirmPassword ? (
                                        <VscEyeClosed className="text-2xl text-gray-500" />
                                    ) : (
                                        <VscEye className="text-2xl text-gray-500" />
                                    )}
                                </button>
                            </div>
                            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                        </div>
                        <div className="">
                            <button
                                onClick={handleSubmit}
                                className="px-4 py-2 bg-rose-500 text-white text-xl rounded-full mx-auto mt-4"
                            >
                                Sign Up
                            </button>
                            <div className="mt-1 leading-3">
                                <h1>already have an account</h1>
                                <button onClick={toggleSignInUp} className='text-rose-400'>sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp