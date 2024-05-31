import React from 'react';
import AuthForm from './AuthForm';

const SignIn = ({ setShowSignIn, setShowSignUp }) => {
    return (
        <AuthForm
            mode="signin"
            toggleMode={() => {
                setShowSignIn(false);
                setShowSignUp(true);
            }}
            handleClose={() => setShowSignIn(false)}
        />
    );
};

export default SignIn

// import React, { useEffect, useState } from 'react'
// import { VscEye, VscEyeClosed } from "react-icons/vsc";
// import { MdClose } from "react-icons/md";


// function SignIn({ setShowSignIn, setShowSignUp }) {
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [showPassword, setShowPassword] = useState(false);
//     const [errors, setErrors] = useState({ email: '', password: '' });

//     const toggleShowPassword = () => {
//         setShowPassword(!showPassword);
//     };

//     const validateEmail = () => {
//         if (!email) {
//             return 'Email is required';
//         }
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(email)) {
//             return 'Invalid email address';
//         }
//         return '';
//     };

//     const validatePassword = () => {
//         if (!password) {
//             return 'Password is required';
//         }
//         if (password.length < 6) {
//             return 'Password must be at least 6 characters';
//         }
//         return '';
//     };

//     const handleSignInShow = () => {
//         setShowSignIn(false)
//     }

//     const toggleSignInUp = () => {
//         setShowSignIn(false)
//         setShowSignUp(true)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const emailError = validateEmail();
//         const passwordError = validatePassword();
//         if (emailError || passwordError) {
//             setErrors({ email: emailError, password: passwordError });
//         } else {
//             setErrors({ email: '', password: '' });
//             // Proceed with form submission
//             console.log('Form submitted:', { email, password });
//         }
//     };

//     return (
//         <div class="relative h-[100vh] w-full">
//             <div class="absolute top-0 left-0 h-full w-full bg-black opacity-50 backdrop-blur"></div>
//             <div class="absolute top-2 left-1/2 z-10 w-[500px] h-fit text-black text-center bg-white rounded-[30px] transform -translate-x-1/2">
//                 <button
//                     onClick={handleSignInShow}
//                     className="absolute top-5 right-5 hover:scale-[108%]">
//                     <MdClose className='text-[28px] text-neutral-600' />
//                 </button>
//                 <div className="my-16">
//                     <div className=" text-3xl font-medium">
//                         <h1 class="text-2xl text-black">Welcome to </h1>
//                         <h1 class="text-black">STOP SHOP</h1>
//                         <h1 class="text-lg text-rose-500">SIGN IN</h1>
//                     </div>
//                     <div className="flex flex-col gap-4 mt-10">
//                         <div className="flex flex-col gap-1 items-start w-[320px] mx-auto">
//                             <label htmlFor="email" className="text-lg">Email</label>
//                             <input
//                                 id="email"
//                                 type="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 onBlur={() => setErrors({ ...errors, email: validateEmail() })}
//                                 className="text-xl px-2 py-2 border border-neutral-900 outline-none w-full"
//                             />
//                             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                         </div>
//                         <div className="flex flex-col gap-1 items-start w-[320px] mx-auto">
//                             <label htmlFor="password" className="text-lg">Password</label>
//                             <div className="relative w-full">
//                                 <input
//                                     id="password"
//                                     type={showPassword ? 'text' : 'password'}
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     onBlur={() => setErrors({ ...errors, password: validatePassword() })}
//                                     className="text-xl pl-2 py-2 pr-12 border border-neutral-900 outline-none w-full"
//                                 />
//                                 <button
//                                     type="button"
//                                     onClick={toggleShowPassword}
//                                     className="absolute inset-y-0 right-0 px-2 bg-white flex items-center border border-neutral-900"
//                                 >
//                                     {showPassword ? (
//                                         <VscEyeClosed className="text-2xl text-gray-500" />
//                                     ) : (
//                                         <VscEye className="text-2xl text-gray-500" />
//                                     )}
//                                 </button>
//                             </div>
//                             {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//                         </div>
//                         <div className="">
//                             <button
//                                 onClick={handleSubmit}
//                                 className="px-4 py-2 bg-rose-500 text-white text-xl rounded-full mx-auto mt-4"
//                             >
//                                 Sign In
//                             </button>
//                             <div className="mt-1 leading-3">
//                                 <h1>new to STOP SHOP?</h1>
//                                 <button onClick={toggleSignInUp} className='text-rose-400'>create an account</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SignIn