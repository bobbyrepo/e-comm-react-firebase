import React from 'react';
import { MdClose } from 'react-icons/md';

const FormHeader = ({ title, subtitle, handleClose }) => (
    <div className="text-3xl font-medium">
        <h1 className="text-2xl text-black">{title}</h1>
        <h1 className="text-black">STOP SHOP</h1>
        <h1 className="text-lg text-rose-500">{subtitle}</h1>
        <button
            onClick={handleClose}
            className="absolute top-5 right-5 hover:scale-[108%]"
        >
            <MdClose className="text-[28px] text-neutral-600" />
        </button>
    </div>
);

export default FormHeader;
