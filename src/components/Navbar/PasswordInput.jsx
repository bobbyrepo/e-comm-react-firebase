import React from 'react';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';

const PasswordInput = ({ id, label, value, onChange, onBlur, showPassword, toggleShowPassword, error }) => (
    <div className="flex flex-col gap-1 items-start w-[320px] mx-auto">
        <label htmlFor={id} className="text-lg">{label}</label>
        <div className="relative w-full">
            <input
                id={id}
                type={showPassword ? 'text' : 'password'}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
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
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
);

export default PasswordInput;