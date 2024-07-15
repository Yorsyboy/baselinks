import { App, Backend, Frontend, Graphics, Photography, Programming, Ui } from '../../Assets/Index';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

interface CourseData {
    id: number;
    title: string;
    programmingLanguage: string;
    properties: string[];
    image: string;
    status: string;
}

const data: CourseData[] = [
    {
        id: 1,
        title: 'Web Development',
        programmingLanguage: 'ReactJS',
        properties: [
            'Building reusable UI components',
            'Functional programming principles',
            'Lifecycle methods',
            'Component-based architecture'
        ],
        image: Frontend,
        status: 'Ongoing',
    },
    {
        id: 2,
        title: 'Backend Development',
        programmingLanguage: 'NodeJS',
        properties: [
            'Server-side JavaScript',
            'Website development',
            'Asynchronous programming',
            'Non-blocking I/O',
            'Scalable applications',
            'Event-driven architecture'
        ],
        image: Backend,
        status: 'Ongoing',
    },
    {
        id: 3,
        title: 'Graphics Design',
        programmingLanguage: 'Adboe XD & Figma',
        properties: [
            'UI/UX design',
            'Wireframing',
            'Prototyping',
            'Design systems'
        ],
        image: Graphics,
        status: 'Ongoing',
    },
    {
        id: 4,
        title: 'UI/UX Design',
        programmingLanguage: 'Adobe XD & Figma',
        properties: ['Wireframing', 'Prototyping', 'Design systems', 'UI/UX design', 'Design thinking'],
       image: Ui,
        status: 'Ongoing',
    },
    {
        id: 5,
        title: 'Mobile App Development',
        programmingLanguage: 'React Native & NodeJS',
        properties: [
            'Building reusable UI components',
            'Functional programming principles',
            'Lifecycle methods',
            'Component-based architecture'
        ],
        image: App,
        status: 'Ongoing',
    },
    {
        id: 6,
        title: 'Photography',
        programmingLanguage: 'Adobe Lightroom & Photoshop',
        properties: [
            'Photo editing',
            'Color correction',
            'Photo manipulation',
            'Photo retouching',
            'Photo restoration'
        ],
      image: Photography,
        status: 'Ongoing',
    },
    {
        id: 7,
        title: 'Programming Languages',
        programmingLanguage: 'Python, JavaScript, Java, C++, C#',
        properties: [
            'Object-oriented programming',
            'Functional programming',
            'Procedural programming',
            'Data structures',
            'Algorithms'
        ],
        image: Programming,
        status: 'Ongoing',
    }
];

const CourseTab: React.FC = () => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState<CourseData[]>(data);

    return (
        <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {courses.map((course) => (
                        <div className="relative flex gap-4 border shadow-lg outline-none rounded-lg p-4">
                            <div className="w-1/2">
                                <img src={course.image} alt="course" className="w-52 h-40 rounded-lg" />
                            </div>
                            <div className="w-1/2 py-2">
                                <div className="flex ">
                                    <Link to={`/user/courses/${course.id}`} style={{ textDecoration: 'none' }}>
                                        <h3 className="text-sm font-semibold underline-none text-lmsPrimary cursor-pointer">
                                            {course.title}
                                        </h3>
                                    </Link>
                                </div>
                                <div className="flex">
                                    <p className="text-sm">{course.programmingLanguage}</p>
                                </div>
                                <hr />
                                <div className="flex flex-col">
                                    <ul className="list-disc mt-5 pl-4 mb-10">
                                        {course.properties.map((property) => (
                                            <li key={property} className="text-sm">
                                                {property}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default CourseTab;
