import React, { ChangeEvent, useState } from 'react';

interface DateOfBirthInputProps {
    value: string; // The value of the date of birth input (format: YYYY-MM-DD)
    onChange: (newValue: string) => void; // The callback function to handle input changes
}

const DateOfBirthInput: React.FC<DateOfBirthInputProps> = ({ value, onChange }) => {
    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        onChange(newValue);
    };

    return (
        <input
            className="border border-gray-300 rounded-md w-full p-2 text-md focus-within:outline-none text-gray-400"
            type="date"
            value={value}
            onChange={handleDateChange}
        />
    );
};

export default DateOfBirthInput;
