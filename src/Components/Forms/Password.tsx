import React, { useState } from 'react';
import { FiEyeOff, FiEye } from 'react-icons/fi';

type PasswordFieldProps = {
    placeholder?: string;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
    error?: string;
    size?: 'sm' | 'md' | 'lg';
    // label?: string;
};

const Password = ({ placeholder = 'Password', name = '', value = '', onChange, onFocus, error = '', size = 'md' }: PasswordFieldProps) => {
    const [open, setOpen] = useState(true);

    const togglePassword = () => {
        setOpen(!open);
    };

    return (
        <div
            className={`border border-gray-300 rounded-md w-full p-2 ${size === 'sm' && 'text-sm'} ${size === 'md' && 'text-md'} ${
                size === 'lg' && 'text-lg'
            }`}
        >
            <div className="relative ">
                {/* <label htmlFor={name}>{label || "Input Label"}</label> */}
                <input
                    className="w-full focus-within:outline-none"
                    type={open ? 'password' : 'text'}
                    placeholder={placeholder || 'Enter Password'}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={onFocus}
                    required
                />
                {open ? (
                    <FiEyeOff className="absolute text-[#8C8C8C] right-2 bottom-1 cursor-pointer text-lg" onClick={togglePassword} />
                ) : (
                    <FiEye className="absolute text-[#8C8C8C] right-2 bottom-1 cursor-pointer text-lg" onClick={togglePassword} />
                )}
            </div>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Password;
