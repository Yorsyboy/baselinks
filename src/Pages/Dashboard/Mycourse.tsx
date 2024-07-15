import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Graphics,
  Photography,
  Ui,
} from "../../Assets/Index";
import Breadcrumb from "../../Components/Breadcrumbs/Breadcrumb";

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
    id: 3,
    title: "Graphics Design",
    programmingLanguage: "Adboe XD & Figma",
    properties: [
      "UI/UX design",
      "Wireframing",
      "Prototyping",
      "Design systems",
    ],
    image: Graphics,
    status: "Ongoing",
  },
  {
    id: 4,
    title: "UI/UX Design",
    programmingLanguage: "Adobe XD & Figma",
    properties: [
      "Wireframing",
      "Prototyping",
      "Design systems",
      "UI/UX design",
      "Design thinking",
    ],
    image: Ui,
    status: "Ongoing",
  },
  {
    id: 6,
    title: "Photography",
    programmingLanguage: "Adobe Lightroom & Photoshop",
    properties: [
      "Photo editing",
      "Color correction",
      "Photo manipulation",
      "Photo retouching",
      "Photo restoration",
    ],
    image: Photography,
    status: "Ongoing",
  },
];

const MyCourse: React.FC = () => {
  const [courses, setCourses] = useState<CourseData[]>(data);

  return (
    <div>
      <div className="p-5">
      <Breadcrumb pageName='My Courses' />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.map((course) => (
          <div className="relative flex gap-4 border shadow-lg outline-none rounded-lg p-4">
            <div className="w-1/2">
              <img
                src={course.image}
                alt="course"
                className="w-52 h-40 rounded-lg"
              />
            </div>
            <div className="w-1/2 py-2">
              <div className="flex ">
                <Link
                  to={`/user/courses/${course.id}/course`}
                  style={{ textDecoration: "none" }}
                >
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

export default MyCourse;
