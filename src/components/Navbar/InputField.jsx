import React from 'react';

const InputField = ({ id, label, type, value, onChange, onBlur, error }) => (
    <div className="flex flex-col gap-1 items-start w-[320px] mx-auto">
        <label htmlFor={id} className="text-lg">{label}</label>
        <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className="text-xl px-2 py-2 border border-neutral-900 outline-none w-full"
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
);

export default InputField;