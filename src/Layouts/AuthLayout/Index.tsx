import React, { useEffect, useReducer } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AiFillCaretDown } from 'react-icons/ai';
import Footer from '../../Components/Menu/Footer';
import { AuthBg, AuthBg2 } from '../../Assets/Index';

const AuthLayout = (props: any) => {
    const initialState = {
        openMobileSideBar: false
    };
    const [state, setState] = useReducer((state: any, newState: any) => ({ ...state, ...newState }), initialState);
    const { openMobileSideBar } = state;

    useEffect(
        () =>
            // Cleanup method
            () => {
                setState({
                    ...initialState
                });
            },
        []
    );

    // const { pathname } = window.location;
    const location = useLocation();

    const backgroundImage = location.pathname === '/auth/signup' ? AuthBg : AuthBg2;

    return (
        <div className="flex flex-col">
            <div className="grid md:grid-cols-2 h-screen w-screen" style={{ overflow: 'hidden' }}>
                <div
                    className="order-2 hidden md:flex md:items-center md:justify-center relative"
                    style={{
                        backgroundImage: `linear-gradient(180deg, rgba(92, 0, 0, 0.8) 100%, rgba(239, 221, 145, 0.8) 100%), url(${backgroundImage})`,
                        // backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}
                />

                <Outlet />
            </div>
            <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
                <Footer />
            </div>
        </div>
    );
};

export default AuthLayout;
