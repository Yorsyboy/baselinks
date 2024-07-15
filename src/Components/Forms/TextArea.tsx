import React, { ChangeEvent } from 'react';

interface FormTextAreaProps {
    type?: string;
    name?: string;
    value?: string;
    label?: string;
    placeholder?: string;
    error?: string;
    size?: 'sm' | 'md' | 'lg';
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<FormTextAreaProps> = ({ type, name, value, placeholder, error, size, label, onChange }) => (
    <div className="">
        <label htmlFor={name}>{label || ''}</label>
        <textarea
            className={`border border-gray-300 rounded-md w-full focus-within:outline-none p-2 ${size === 'md' && 'text-md'} ${
                size === 'lg' && 'text-lg'
            } ${size === 'lg' && 'h-32'}`} // Increase the height for lg size
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={size === 'lg' ? 6 : 4} // Adjust the number of rows for lg size
        />

        {error && <p>{error}</p>}
    </div>
);

export default TextArea;
