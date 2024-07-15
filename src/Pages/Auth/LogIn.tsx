import React, { useState } from 'react';
// import AuthLogoDisplay from '../../Components/Display/AuthLogoDisplay';
import Input from '../../Components/Forms/Input';
import Password from '../../Components/Forms/Password';
import { Link } from 'react-router-dom';
import { SubmitButton } from '../../Components/Button/Index';
import Select from '../../Components/Forms/Select';
import CheckBox from '../../Components/Forms/CheckBox';
import { Logo } from '../../Assets/Index';

const LoginDisplay = () => {
    const [formData, setFormData] = useState<any>({
        password: '',
        email: ''
    });
    const [error, setErrors] = useState<any>({});

    const handleInputChange = (name: string, value: any) => {
        setFormData((prevState: any) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCheckBoxChange = () => {
        // Handle checkbox change event
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const { email, password } = formData;

        if (!email || !password) {
            setErrors({
                email: !email ? 'Email is required' : '',
                password: !password ? 'Password is required' : ''
            });
            return;
        }
    };
    return (
        <div className="flex flex-col w-full  items-center mt-20  font-montRegular ">
            <div className=" w-full flex flex-col items-center  ">
            <img src={Logo} alt="logo" className="w-[20%]" />
                <h2 className="text-lmsPrimary text-2xl font-montBold align-center mt-6">Login to your dashboard</h2>
            </div>

            <form onSubmit={handleSubmit} className=" w-full md:w-[90%] lg:w-[70%] p-10">
                <div className="mb-5">
                    <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="hi@xample.com"
                        error={error.email}
                        size="md"
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                    />
                </div>
                <div className="">
                    <Password
                        // label="Password"
                        name="password"
                        value={formData.password}
                        placeholder="Enter your password"
                        error={error.password}
                        size="md"
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                    />
                </div>
                <div className="flex justify-between items-center py-2">
                    <CheckBox name="remember" label="Remember me" onChange={handleCheckBoxChange} error="" />
                    <Link to="/auth/forgot-password" className="text-lmsPrimary font-montRegular text-sm">
                        Forgot Password?
                    </Link>
                </div>
                <div className="pt-6 md:py-3">
                    <SubmitButton type="submit">Login</SubmitButton>
                </div>
                <div className="flex justify-center  pb-10">
                    <p className="font-montRegular text-sm ">
                        <span className="text-[#25234C] ">Not registered? </span>{' '}
                        <Link to="/auth/signup" className="text-lmsPrimary ">
                            Sign up
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

const LogIn = () => <LoginDisplay />;

export default LogIn;
