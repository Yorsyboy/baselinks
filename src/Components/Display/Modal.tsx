import { Girl, Line } from '../../Assets/Index';
import React, { useState } from 'react';
import Modal from 'react-modal';

// Modal styles (optional, you can customize it as needed)
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '600px', // Set the max width of the modal
        maxHeight: '900px' // Set the max height of the modal
    }
};

interface ModalComponentProps {
    isOpen: boolean;
    closeModal: () => void;
}

// The ModalComponent
const ModalComponent: React.FC<ModalComponentProps> = ({ isOpen, closeModal }) => (
 
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
        {/* Modal Content */}
        <div className="flex flex-col py-20 md:py-0">
            <div className="flex flex-col items-center">
                <p>If you are having problems viewing this in your email browser please click here</p>
                <img src={Line} alt="" />
            </div>
            <div className="flex flex-col md:flex-row py-10 gap-10">
                <div className="">
                    <h1 className="font-extrabold">One more thing to do! </h1>
                    <p>
                        Click on the button “Click here to verify” to activate your new account. We want you to get started as soon as
                        possible. If by any chance you are not able to click the button we have provided a link for you to copy and paste in
                        your browser.{' '}
                    </p>
                </div>
                <div className="w-[50%] md:h-full">
                    <img src={Girl} alt="" />
                </div>
            </div>
        </div>
    </Modal>
);
export default ModalComponent;
