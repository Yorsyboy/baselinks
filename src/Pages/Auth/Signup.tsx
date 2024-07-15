import React, { useState } from 'react';
import Input from '../../Components/Forms/Input';
import Password from '../../Components/Forms/Password';
import { Link } from 'react-router-dom';
import { SubmitButton } from '../../Components/Button/Index';
import Select from '../../Components/Forms/Select';
import { Logo } from '../../Assets/Index';
import { useNavigate } from 'react-router-dom';


const SignUpDisplay = () => {
    const [formData, setFormData] = useState<any>({
        fullname: '',
        username: '',
        dateOfBirth: '',
        password: '',
        confirmPassword: '',
        email: '',
    });
    const [error, setErrors] = useState<any>({});
    const navigate = useNavigate();

    const handleInputChange = (name: string, value: any) => {
        setFormData((prevState: any) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const { fullname, username, email, password, confirmPassword } = formData;

        if (!fullname || !username || !email || !password || !confirmPassword) {
            setErrors({
                fullname: !fullname ? 'Fullname is required' : '',
                username: !username ? 'Username is required' : '',
                email: !email ? 'Email is required' : '',
                password: !password ? 'Password is required' : '',
                confirmPassword: !confirmPassword ? 'Confirm Password is required' : ''
            });
            return;
        }


        if (password.length < 6) {
            setErrors({
                password: 'Password must be at least 6 characters long'
            });
            return;
        }
        if (password !== confirmPassword) {
            setErrors({
                confirmPassword: 'Password does not match'
            });
            return;
        }

     
        navigate('/auth/email-verify');
    };
    return (
        <div className="flex flex-col w-full  items-center   font-montRegular ">
            <div className=" w-full flex flex-col items-center  ">
            <img src={Logo} alt="logo" className="w-[10%]" />
                <h2 className="text-lmsPrimary text-2xl font-montBold align-center ">Create an account</h2>
            </div>

            <form onSubmit={handleSubmit} className=" w-full md:w-[90%] lg:w-[70%] p-10">
                <div className="py-2">
                    <Input
                        type="text"
                        name="fullname"
                        value={formData.fullname}
                        placeholder="fullname"
                        error={error.fullname}
                        size="md"
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                    />
                </div>
                <div className="py-2">
                    <Input
                        type="text"
                        name="username"
                        value={formData.username}
                        placeholder="username"
                        error={error.username}
                        size="md"
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                    />
                </div>
                <div className="py-2">
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
                <div>
                    <Select
                        id="track"
                        options={[
                            { name: 'Preferred track', value: '' },
                            { name: 'Graphic Design', value: 'graphic design' },
                            { name: 'Photography', value: 'photography' },
                            { name: 'UI/UX Design', value: 'ui/ux design' },
                            { name: 'Programming', value: 'programming' },
                            { name: 'Mobile App Development', value: 'mobile App development' },
                            { name: 'Web App Development', value: 'web App development' }
                        ]}
                    />
                </div>
                <div className="py-2">
                    <Password
                        name="password"
                        value={formData.password}
                        placeholder="Enter your password"
                        error={error.password}
                        size="md"
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                    />
                </div>
                <div className="py-2">
                    <Password
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        placeholder="Confirm password"
                        error={error.confirmPassword}
                        size="md"
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                    />
                </div>
                <div className="pt-6 md:py-3">
                    <SubmitButton type="submit">Sign Up</SubmitButton>
                </div>
                <div className="flex justify-center">
                    <p className="font-montRegular text-sm ">
                        <span className="text-[#25234C] ">Already have an account? </span>{' '}
                        <Link to="/auth/login" className="text-lmsPrimary ">
                            Login
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

const SignUp = () => <SignUpDisplay />;

export default SignUp;
