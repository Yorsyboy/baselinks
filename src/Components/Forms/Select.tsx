import React from 'react';

export interface Option {
    name: string;
    value: string;
}

interface SelectProps {
    id: string;
    options: Option[];
    selected?: Option;
    onChange?: (selectedOption: Option | undefined) => void;
    placeholder?: string;
}

const Select: React.FC<SelectProps> = ({ id, options, selected, onChange, placeholder }) => {
    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { selectedIndex } = event.target;
        const selectedOption = options[selectedIndex];
        onChange?.(selectedOption);
    };

    return (
        <div>
            <select
                className="border border-gray-300 rounded-md w-full p-2 text-md focus-within:outline-none text-gray-400"
                id={id}
                value={selected?.name}
                onChange={handleOptionChange}
            >
                {placeholder && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                )}
                {options.map((option, index) => (
                    <option className=" text-slate-950" key={index} value={option.name}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
