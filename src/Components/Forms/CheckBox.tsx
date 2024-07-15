import React from 'react';

type Props = {
    name: string;
    label?: string;
    onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
};

const CheckBox = ({ name, label = 'Check Label', onChange, error = '' }: Props) => (
    <div>
        <div className="flex gap-2 items-center justify-center">
            <input
                type="checkbox"
                name={name}
                id={name}
                onChange={onChange}
                className="form-checkbox h-4 w-4 text-primary rounded border-primary outline-none focus:ring-primary focus:text-primary"
            />
            <label htmlFor={name} className="text-primary font-montRegular text-sm">
                {label || ''}
            </label>
        </div>
        {error && (
            <p className="mt-2 text-xs text-warning">
                <span className="font-medium">{error}</span>
            </p>
        )}
    </div>
);

export default CheckBox;
