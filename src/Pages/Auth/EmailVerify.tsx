import { Logo, Mail } from '../../Assets/Index';
import { OutlineButton, SubmitButton } from '../../Components/Button/Index';
import ModalComponent from '../../Components/Display/Modal';
import Footer from '../../Components/Menu/Footer';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function EmailVerify() {
    const [username, setUsername] = useState<string>('username');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const HandleEmailVerify = () => {
        // <ModalComponent />;
        // console.log("Email Verify")
        setIsModalOpen(true);
    };
    return (
        <div className=" ">
            <div className=" flex gap-6 md:gap-0 justify-between md:px-5 py-4 ">
            <img src={Logo} alt="logo" className="w-[10%]" />
                <div className="md:ml-8 ">
                    <img src={Logo} alt="Logo" className="ml-[20px] md:ml-0 w-20 sm:w-24 md:w-40" />
                </div>
                <div className="flex items-center gap-2 mr-8">
                    <p>{username}</p>
                    <OutlineButton>Logout</OutlineButton>
                </div>
            </div>
            <div className="border max-w-2xl mx-auto text-center p-10 md:p-12 shadow-xl text-primary bg-white ">
                <div className="flex justify-center ">
                    <img src={Mail} alt="" />
                </div>
                <p>Verify your email address</p>
                <p className="p-1 md:py-2 md:px-[7.5rem]">
                    To confirm your email address, <span className="font-bold text-lg">please click</span> on the link in the email we sent
                    you.
                </p>
                <p>Still can&apos;t find the email</p>
                <div className="flex justify-center">
                    <SubmitButton onClick={HandleEmailVerify} className="md:w-[25%] py-2  rounded-md bg-primary text-white">
                        Resend Email
                    </SubmitButton>
                </div>
                <div className="mt-5">
                    <p>Need more help?</p>
                    <p>
                        Contact us at{' '}
                        <Link to="mailto:" className="text-[#25234C] underline">
                            suppprt@baselinksacademy.com
                        </Link>
                    </p>
                </div>
                <ModalComponent isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
            </div>
            <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
                <Footer />
            </div>
        </div>
    );
}

export default EmailVerify;
