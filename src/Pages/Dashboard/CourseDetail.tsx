// import { Prec } from 'Assets';
// import CourseCard from 'Components/PayForCourse/CourseCard';
import { Frontend } from '../../Assets/Index';
import CourseDetailTab from '../../Components/Tab/CourseDetailTab';
import React from 'react';

function CourseDetail() {
    return (
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
            <div className="shadow-2xl flex flex-col justify-between items-center bg-white border border-gray-200 rounded-lg  md:flex-row md:max-w-6xl hover:bg-gray-100">
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className='font-bold text-xl'>Frontend Development with React</h5>
                    <ul className='font-light text-lg'>
                        <li>- Building reusable UI components</li>
                        <li>- Functional programming principles</li>
                        <li>- Lifecycle methods</li>
                        <li>- Component-based architecture</li>
                    </ul>
                </div>
                <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={Frontend}
                    alt=""
                />
            </div>
            <CourseDetailTab />
        </div>
    );
}

export default CourseDetail;
