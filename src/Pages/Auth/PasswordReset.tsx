import React, { useState } from 'react';
import Footer from '../../Components/Menu/Footer';
import { SubmitButton } from '../../Components/Button/Index';
import Input from '../../Components/Forms/Input';
// import AuthLogoDisplay from '../../Components/Display/AuthLogoDisplay';
import { Link } from 'react-router-dom';
import { Arrow, Logo } from '../../Assets/Index';

// interface ForgotPasswordProps {
//   handleForgotPassword: (email: string) => void;
// }

const PasswordResetDisplay = () => {
    const [email, setEmail] = useState('test@gmail.com');
    //   const [error, setError] = useState();

    //   const handleSubmit = (e: any) => {
    //     e.preventDefault();
    //     handleForgotPassword(email);
    //   };

    return (
        <div className="flex flex-col max-w-4xl p-20 md:p-10 items-center mx-auto mt-12 font-montRegular">
           <img src={Logo} alt="logo" className="w-[10%]" />
            <div className="md:mt-20 md:w-[60%]">
                <h2 className="text-primary text-3xl font-montSemiBold font-bold align-center mt-4 text-center">Password Reset</h2>
                <p className="text-primary align-center pt-2 text-lg text-center ">Instructions to reset your password has been sent to:</p>
                <p className="text-primary align-center pt-2 text-center font-montBold text-2xl ">{email}</p>
                <p className="text-primary align-center pt-2 text-lg text-center ">
                    If you didn’t receive it, please
                    <Link to="/" className="text-lmsPrimary ml-2 text-underline">
                        contact support
                    </Link>
                </p>
            </div>
            <div className="w-full md:w-[90%] lg:w-[60%] mt-2 bg-primary text-white text-center py-3 rounded-md">
                <Link to="/auth/login">Back to Login</Link>
            </div>
        </div>
    );
};

function PasswordReset() {
    return (
        <>
            <PasswordResetDisplay />
        </>
    );
}

export default PasswordReset;
