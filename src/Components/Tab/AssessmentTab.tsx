// import { File } from 'Assets';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface AssessmentProps {
    id: number;
    program: string;
    duration: string;
    timeSpent?: string;
    totalquestions: string;
    scores?: string;
}

const list: AssessmentProps[] = [
    {
        id: 1,
        program: 'Web Development',
        duration: '1 hour',
        timeSpent: '45 mins',
        totalquestions: '10',
        scores: '5/10'
    },
    {
        id: 2,
        program: 'Backend Development',
        duration: '1 hour',
        timeSpent: '50 mins',
        totalquestions: '10',
        scores: '7/10'
    },
    {
        id: 3,
        program: 'Graphics Design',
        duration: '1 hour',
        timeSpent: '30 mins',
        totalquestions: '10',
        scores: '8/10'
    },
    {
        id: 4,
        program: 'UI/UX Design',
        duration: '1 hour',
        timeSpent: '45 mins',
        totalquestions: '10',
        scores: '6/10'
    },
    {
        id: 5,
        program: 'Mobile App Development',
        duration: '1 hour',
        timeSpent: '45 mins',
        totalquestions: '10',
        scores: '7/10'
    },
    {
        id: 6,
        program: 'Photography',
        duration: '1 hour',
        timeSpent: '30 mins',
        totalquestions: '10',
        scores: '9/10'
    },
    {
        id: 7,
        program: 'Programming Languages',
        duration: '1 hour',
        timeSpent: '1 hour',
        totalquestions: '10',
        scores: '10/10'
    }
];

const AssessmentTab: React.FC = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'assessment' | 'completed'>('assessment');
    const handleTabChange = (tab: 'assessment' | 'completed') => {
        setActiveTab(tab);
    };
    return (
        <div>
            <div className="flex justify-between items-center  mb-4 border-b border-gray-200">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
                    <li className="mr-2" role="presentation">
                        <button
                            className={`inline-block p-4 border-b-2 rounded-t-lg text-blue-600 ${
                                activeTab === 'assessment'
                                    ? 'border-blue-600 text-blue-600 hover:text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300'
                            }`}
                            type="button"
                            role="tab"
                            onClick={() => handleTabChange('assessment')}
                        >
                            Assessment
                        </button>
                    </li>
                    <li className="mr-2" role="presentation">
                        <button
                            className={`inline-block p-4 border-b-2 rounded-t-lg ${
                                activeTab === 'completed'
                                    ? 'text-blue-600 border-blue-600 hover:text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300'
                            }`}
                            type="button"
                            role="tab"
                            onClick={() => handleTabChange('completed')}
                        >
                            Completed
                        </button>
                    </li>
                </ul>
            </div>
            {activeTab === 'assessment' && (
                <table className="w-full table-auto">
                    <thead className="bg-[#D8E4FF]">
                        <tr className="text-center">
                            <th className="px-4 py-6">S/N</th>
                            <th className="px-4 py-6">Program</th>
                            <th className="px-4 py-6">Duration</th>
                            <th className="px-4 py-6">Total Questions</th>
                            <th className="px-4 py-6">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item) => (
                            <tr key={item.id} className={`text-center ${item.id % 2 === 0 ? 'bg-[#D8E4FF]' : ''}`}>
                                <td className="px-4 py-3 flex items-center gap-6">
                                    {/* <img src={File} alt="" className="w-10 h-1\" /> */}
                                    {item.id}
                                </td>
                                <td className="px-4 py-3">{item.program}</td>
                                <td className="px-4 py-3">{item.duration}</td>
                                <td className="px-4 py-3">{item.totalquestions}</td>
                                <td className="px-4 py-3">
                                    <Link to={`/user/course/instruction/${item.id}`} className="bg-green-500 text-white font-bold py-2 px-4 rounded">
                                        Start
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {activeTab === 'completed' && (
                <table className="w-full table-auto">
                    <thead className="bg-[#D8E4FF]">
                        <tr className="text-center">
                            <th className="px-4 py-6">S/N</th>
                            <th className="px-4 py-6">Program</th>
                            <th className="px-4 py-6">Time Spent</th>
                            <th className="px-4 py-6">Total Questions</th>
                            <th className="px-4 py-6">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item) => (
                            <tr key={item.id} className={`text-center ${item.id % 2 === 0 ? 'bg-[#D8E4FF]' : ''}`}>
                                <td className="px-4 py-3 flex items-center gap-6">
                                    {/* <img src={File} alt="" className="w-10 h-1\" /> */}
                                    {item.id}
                                </td>
                                <td className="px-4 py-3">{item.program}</td>
                                <td className="px-4 py-3">{item.timeSpent}</td>
                                <td className="px-4 py-3">{item.scores}</td>
                                <td className="px-4 py-3">
                                    <Link to={`/user/assessment/program/complete`} className="bg-green-500 text-white font-bold py-2 px-4 rounded">
                                        View
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AssessmentTab;
