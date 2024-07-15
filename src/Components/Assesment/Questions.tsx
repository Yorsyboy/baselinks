
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GrNext, GrPrevious } from "react-icons/gr";

export interface QuestionsProps {
    id: number;
    question: string;
    option1: string;
    option2: string;
    option3?: string;
    option4?: string;
}

export const list: QuestionsProps[] = [
    {
        id: 1,
        question: 'Is the sky blue?',
        option1: 'True',
        option2: 'False'
    },
    {
        id: 2,
        question: 'Which of these is not a fruit?',
        option1: 'Strawberry',
        option2: 'Pinapple',
        option3: 'Brocolli',
        option4: 'Banana'
    },
    {
        id: 3,
        question: 'Which of the following statements are false?',
        option1: 'Kelvin is a measure of temperature',
        option2: 'Venus is the closest planet to the Sun',
        option3: 'Mount Kilimanjaro is the tallest mountain in the world',
        option4: 'Filtrations separates mixtures based upon their particle size'
    }
];

function Questions() {
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>(() => {
        const storedAnswers = localStorage.getItem('selectedAnswers');
        return storedAnswers ? JSON.parse(storedAnswers) : [];
    });

    useEffect(() => {
        // Save the selectedAnswers state to local storage whenever it changes.
        localStorage.setItem('selectedAnswers', JSON.stringify(selectedAnswers));
    }, [selectedAnswers]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAnswerSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[currentQuestionIndex] = event.target.value;
        setSelectedAnswers(newSelectedAnswers);
    };

    const handleNext = () => {
        if (selectedAnswers[currentQuestionIndex] !== undefined) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrevious = () => {
        setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleToggleModal = () => {
        setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
    };

    const handleBackToAssessment = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setIsModalOpen(false);
    };

    const handleSubmit = () => {
        navigate('/user/assessment/program/complete');
    };

    const currentQuestion = list[currentQuestionIndex];

    return (
        <div className="border shadow-lg outline-none rounded-lg">
            <div className="p-4">
                <h1 className="text-xl font-bold">Program: General Knowledge Test</h1>
                <p className="text-lg font-bold">
                    Description: <span className="text-[#7A7A7A]">A general knowledge assessment to gauge the knowledge of students</span>
                </p>
                <p className="text-lg font-bold">
                    Time remaining: <span className="text-[#7A7A7A]"> 00:20:00</span>
                </p>
            </div>
            {currentQuestion && (
                <div>
                    <div className="border p-4">
                        <p className="font-bold">
                            Question {currentQuestionIndex + 1} of {list.length}
                        </p>
                        <p className="text-[#7A7A7A]">Point: 10</p>
                    </div>
                    <div className="py-4 px-8" key={currentQuestion.id}>
                        <div className="flex items-center gap-1">
                            <p className="font-bold">{currentQuestion.id}.</p>
                            <p className="font-bold">{currentQuestion.question}</p>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="option"
                                id="option1"
                                value={currentQuestion.option1}
                                checked={selectedAnswers[currentQuestionIndex] === currentQuestion.option1}
                                onChange={handleAnswerSelect}
                                className="mr-2"
                            />
                            <label className="font-bold" htmlFor="option1">
                                A. {currentQuestion.option1}
                            </label>
                            <br />
                            <input
                                type="radio"
                                name="option"
                                id="option2"
                                value={currentQuestion.option2}
                                checked={selectedAnswers[currentQuestionIndex] === currentQuestion.option2}
                                onChange={handleAnswerSelect}
                                className="mr-2"
                            />
                            <label className="font-bold" htmlFor="option2">
                                B. {currentQuestion.option2}
                            </label>
                            <br />
                            {currentQuestion.option3 && (
                                <>
                                    <input
                                        type="radio"
                                        name="option"
                                        id="option3"
                                        value={currentQuestion.option3}
                                        checked={selectedAnswers[currentQuestionIndex] === currentQuestion.option3}
                                        onChange={handleAnswerSelect}
                                        className="mr-2"
                                    />
                                    <label className="font-bold" htmlFor="option3">
                                        C. {currentQuestion.option3}
                                    </label>
                                    <br />
                                </>
                            )}
                            {currentQuestion.option4 && (
                                <>
                                    <input
                                        type="radio"
                                        name="option"
                                        id="option4"
                                        value={currentQuestion.option4}
                                        checked={selectedAnswers[currentQuestionIndex] === currentQuestion.option4}
                                        onChange={handleAnswerSelect}
                                        className="mr-2"
                                    />
                                    <label className="font-bold" htmlFor="option4">
                                        D. {currentQuestion.option4}
                                    </label>
                                    <br />
                                </>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-end p-3 text-white">
                        {currentQuestionIndex > 0 && (
                            <button
                                type="button"
                                className={`px-3 py-2 flex items-center gap-1 rounded mr-3 ${
                                    selectedAnswers[currentQuestionIndex] === undefined ? 'bg-[#1D63FE]' : 'bg-green-600'
                                }`}
                                onClick={handlePrevious}
                            >
                                <GrPrevious />
                                Previous Question
                            </button>
                        )}
                        {currentQuestionIndex === list.length - 1 ? (
                            <button
                                className={`px-3 py-2 flex items-center gap-1 rounded ${
                                    selectedAnswers[currentQuestionIndex] === undefined ? 'bg-[#DCDCDC] text-[#878787]' : 'bg-lmswarning'
                                }`}
                                onClick={handleToggleModal}
                                disabled={selectedAnswers[currentQuestionIndex] === undefined}
                                type="button"
                            >
                                Finish Now
                            </button>
                        ) : (
                            <button
                                type="button"
                                className={`px-3 py-2 flex items-center gap-1 rounded ${
                                    selectedAnswers[currentQuestionIndex] === undefined ? 'bg-[#DCDCDC] text-[#878787]' : 'bg-green-600'
                                }`}
                                onClick={handleNext}
                                disabled={selectedAnswers[currentQuestionIndex] === undefined}
                            >
                                Next Question {selectedAnswers[currentQuestionIndex] ? <GrNext /> : <GrNext />}
                            </button>
                        )}
                    </div>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    {/* eslint-disable jsx-a11y/no-static-element-interactions */}
                    {/* eslint-disable jsx-a11y/click-events-have-key-events */}
                    {isModalOpen && (
                        <div
                            className="fixed top-0 left-0 right-0 z-50 p-4 bg-gray-700 bg-opacity-50 flex justify-center items-center h-screen"
                            onClick={handleToggleModal} // Close the modal when the background is clicked
                        >
                            <div className="bg-white flex rounded-lg shadow p-6">
                                <button type="button" onClick={handleBackToAssessment} className="bg-green-600 text-white text-xs rounded-md py-4 px-2">
                                    Back to Assessment
                                </button>
                                <button type="button" onClick={handleSubmit} className="bg-lmswarning text-white text-xs rounded-md py-4 px-3 ml-3">
                                    Confirm finish now
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Questions;
