import React, { forwardRef } from "react";
import Card from "./Card";
import {
  App,
  Frontend,
  Graphics,
  Photography,
  Programming,
  Ui,
} from "../../Assets/Index";


const cardData = [
  {
    title: "Graphics Design",
    description: "This is an example card",
    imageUrl: Graphics,
    properties: [
      "UI/UX design,",
      "Wireframing,",
      "Prototyping,",
      "Design systems",
    ],
  },
  {
    title: "UI/UX Design",
    description: "This is an example card",
    imageUrl: Ui,
    properties: [
      "Wireframing,",
      "Prototyping,",
      "Design systems,",
      "UI/UX design,",
      "Design thinking,",
    ],
  },
  {
    title: "Photography",
    description: "This is an example card",
    imageUrl: Photography,
    properties: [
      "Photo editing,",
      "Color correction,",
      "Photo manipulation,",
      "Photo retouching,",
      "Photo restoration,",
    ],
  },
  {
    title: "Web App Development",
    description: "This is an example card",
    imageUrl: Frontend,
    properties: [
      "HTML,",
      "CSS,",
      "JavaScript,",
      "React,",
      "Node.js,",
      "MongoDB",
    ],
  },
  {
    title: "Mobile App Development",
    description: "This is an example card",
    imageUrl: App,
    properties: [
      "HTML,",
      "CSS,",
      "JavaScript,",
      "React,",
      "Node.js,",
      "MongoDB",
    ],
  },
  {
    title: "Programming",
    description: "This is an example card",
    imageUrl: Programming,
    properties: ["Python", "JavaScript", "Java", "C++", "C#", "Ruby"],
  },
];

const CoursesOffered = forwardRef<HTMLDivElement>((props, ref)=> {
  return (
    <div ref={ref} className="flex flex-col items-start lg:items-center text-center py-24 px-6 lg:px-24">
      <div>
        <h1 className="text-4xl font-semibold mb-3 text-lmsPrimary ">
          Courses Offered
        </h1>
        <p className="text-xl text-gray-dark mb-4">
          We offer a wide range of courses to help you achieve your career
          goals. Our courses are designed to help you learn new skills, advance
          your career, and improve your life. Whether you are looking to start a
          new career, advance in your current career, or just learn something
          new, we have a course for you. Our courses are taught by industry
          experts and are designed to be engaging, interactive, and fun. So why
          wait? Enroll in a course today and start learning!
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:gap-10 md:grid-cols-3 mt-4">
        {cardData.map((card, index) => (
          <Card
            title={card.title}
            imageUrl={card.imageUrl}
            properties={card.properties}
          />
        ))}
      </div>
    </div>
  );
});

export default CoursesOffered;
