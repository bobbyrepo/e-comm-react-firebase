import React from 'react';

const TextareaField = ({ id, label, type, value, onChange, onBlur, error }) => (
    <div className="flex flex-col gap-1 items-start w-full mx-auto">
        <label htmlFor={id} className="text-lg">{label}</label>
        <textarea
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className="text-xl px-2 py-2 border border-neutral-900 outline-none w-full h-[100px] resize-none"
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
);

export default TextareaField;