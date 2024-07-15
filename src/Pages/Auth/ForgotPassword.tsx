import React, { useState } from 'react';
import { SubmitButton } from '../../Components/Button/Index';
import Input from '../../Components/Forms/Input';
import { Link } from 'react-router-dom';
import { Arrow, Key, Logo } from '../../Assets/Index';
import { useNavigate } from 'react-router-dom';


interface ForgotPasswordProps {
    handleForgotPassword: (email: string) => void;
}

const ForgotPassDisplay = ({ handleForgotPassword }: ForgotPasswordProps) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState<string | undefined>();
    const nav = useNavigate();

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!email) {
            setError('Email is required');
            return;
        }

        nav('/auth/email-verify')
    };

    return (
        <div className="flex flex-col max-w-4xl p-12 md:p-10 items-center mx-auto mt-8 font-montRegular">
            <img src={Logo} alt="logo" className="w-[20%]" />
            <div className="flex flex-col md:mt-10 md:w-[60%] items-center">
                <div className=" bg-lmsPrimary flex justify-center rounded-full">
                    <img src={Key} alt="forgot-password" />
                </div>
                <h2 className="text-lmsPrimary text-3xl font-montBold font-bold align-center mt-4 text-center">Forgot your password?</h2>
                <p className="text-lmsPrimary align-center text-lg text-center ">No worries we’ll send you reset instructions.</p>
            </div>
            <form className="w-full md:w-[90%] lg:w-[60%] mt-2">
                <div className="py-2">
                    <Input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="hi@example.com"
                        error={error}
                        size="md"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="pt-4 md:py-3 font-montRegular">
                    <SubmitButton onClick={handleSubmit} type="submit">Confirm</SubmitButton>
                </div>

                <Link to="/auth/login" className="py-2">
                    <p className="flex justify-center items-center gap-2 text-underline  text-lmsPrimary text-center text-sm">
                        <span className=" ">
                            <img src={Arrow} alt="" />
                        </span>
                        <span>Back to login</span>
                    </p>
                </Link>
            </form>
        </div>
    );
};

function ForgotPassword() {
    return (
        <>
            <ForgotPassDisplay handleForgotPassword={() => {}} />
        </>
    );
}

export default ForgotPassword;
