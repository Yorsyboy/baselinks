import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from '../../Assets/Index';

function Footer() {
    return (
        <div className="w-screen h-14 relative bottom-0 flex flex-col md:flex-row justify-around items-center text-white">
            <div className='text-lmsPrimary'>Copyright 2024 Baselinks Academy | All Rights Reserved</div>
            <div className="flex gap-2">
                <img className="w-5 h-5" src={Facebook} alt="" />
                <img className="w-5 h-5" src={Instagram} alt="" />
                <img className="w-5 h-5" src={Twitter} alt="" />
                <img className="w-5 h-5" src={Linkedin} alt="" />
            </div>
        </div>
    );
}

export default Footer;
