
import Breadcrumb from '../../Components/Breadcrumbs/Breadcrumb';
import Courses from '../../Components/Menu/Courses';
import React from 'react';

function Course() {
    return (
        <div>
            <div className="p-5">
                <Breadcrumb pageName='Courses' />
            </div>
            <Courses />
        </div>
    );
}

export default Course;
