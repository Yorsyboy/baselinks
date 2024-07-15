import { SubmitButton } from '../../Components/Button/Index';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Instructions() {
    const navigate = useNavigate();
    return (
        <div className="max-w-4xl mx-auto text-lmsPrimary">
            <h1 className="text-2xl mb-1 font-bold">Baselink Academy Assessment</h1>
            <div className="bg-[#DADADA] p-6 border outline-none rounded-md">
                <div>
                    <p className="text-xl mb-4">Instructions</p>
                    <ul className="list-disc py-2 px-4">
                        <li>Number of questions: 10</li>
                        <li>Has a time limit of: 00:20:00</li>
                        <li>Must be finished in one sitting. You cannot save and finish later.</li>
                        <li>Questions displayed per page: 1</li>
                        <li>You must answer a question to proceed to the next question</li>
                        <li>Will allow you to go back and change your answers</li>
                        <li>Will not let you finish with any questions unattempted</li>
                        <li>Will not let you finish with any questions unattempted</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-end mt-5">
                <SubmitButton onClick={() => navigate('/user/assessment/program')} className="bg-lmsPrimary text-white px-4 py-2 rounded-md">
                    Continue
                </SubmitButton>
            </div>
        </div>
    );
}

export default Instructions;
