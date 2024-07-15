import Breadcrumb from '../../Components/Breadcrumbs/Breadcrumb';
import AssessmentTab from '../../Components/Tab/AssessmentTab';
import React from 'react';

function Assessment() {
    return (
        <div className="max-w-5xl mx-auto">
             <div className="mt-2">
             <Breadcrumb pageName='Assessment' />
            </div>
            <AssessmentTab />
        </div>
    );
}

export default Assessment;
