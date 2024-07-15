import React from 'react';

interface SubmitButtonProps {
    type?: 'submit' | 'button';
    children?: React.ReactNode;
    props?: any;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface OutlineButtonProps extends SubmitButtonProps {
    color?: string;
}

export const SubmitButton = ({ onClick, children, ...props }: SubmitButtonProps) => (
    <button
        type={props.type === 'button' ? 'button' : 'submit'}
        className="bg-lmsPrimary text-white w-full py-3 rounded-md"
        onClick={onClick}
        {...props}
    >
        {children}
    </button>
);

export const OutlineButton = ({ onClick, type = 'submit', children, className, color = 'lmsPrimary', ...props }: OutlineButtonProps) => (
    <button
        type={type === 'button' ? 'button' : 'submit'}
        className={`border border-${color} text-${color} w-full px-4 py-2 rounded-md`}
        onClick={onClick}
        {...props}
    >
        {children}
    </button>
);
