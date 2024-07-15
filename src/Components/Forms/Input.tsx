import React, { ChangeEvent } from 'react';

interface FormInputProps {
    type?: string;
    name?: string;
    value?: string;
    label?: string;
    placeholder?: string;
    error?: string;
    size?: 'sm' | 'md' | 'lg';
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<FormInputProps> = ({ type, name, value, placeholder, error, size, label, onChange }) => (
    <div className="">
        <label htmlFor={name}>{label || ''}</label>
        <input
            className={`border border-gray-300 rounded-md w-full focus-within:outline-none p-2 ${size === 'md' && 'text-md'} ${
                size === 'md' && 'text-md'
            } ${size === 'lg' && 'text-lg'}`}
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />

        {error && <p>{error}</p>}
    </div>
);

export default Input;
