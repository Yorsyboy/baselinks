import React, { useState } from 'react';
import Footer from '../../Components/Menu/Footer';
import { SubmitButton } from '../../Components/Button/Index';
import Input from '../../Components/Forms/Input';
// import AuthLogoDisplay from '../../Components/Display/AuthLogoDisplay';
import { Link } from 'react-router-dom';
import { Arrow, Key, Logo } from '../../Assets/Index';

interface ForgotPasswordProps {
    handleForgotPassword: (email: string) => void;
}

const ForgotPassDisplay = ({ handleForgotPassword }: ForgotPasswordProps) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        handleForgotPassword(email);
    };

    return (
        <div className="flex flex-col max-w-4xl p-12 md:p-10 items-center mx-auto mt-8 font-montRegular">
            <img src={Logo} alt="logo" className="w-[20%]" />
            <div className="flex flex-col md:mt-10 md:w-[60%] items-center">
                <div className=" bg-primary flex justify-center rounded-full">
                    <img src={Key} alt="forgot-password" />
                </div>
                <h2 className="text-primary text-3xl font-montBold font-bold align-center mt-4 text-center">Forgot your password?</h2>
                <p className="text-primary align-center text-lg text-center ">No worries we’ll send you reset instructions.</p>
            </div>
            <form onSubmit={handleSubmit} className="w-full md:w-[90%] lg:w-[60%] mt-2">
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
                    <SubmitButton type="submit">Confirm</SubmitButton>
                </div>

                <Link to="/auth/login" className="py-2">
                    <p className="flex justify-center items-center gap-2 text-underline  text-primary text-center text-sm">
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
