import Accordion from "../../Components/Accordion/Index";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { PiClockCountdownFill } from "react-icons/pi";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { MdCreditScore } from "react-icons/md";

const learn = [
  {
    id: 1,
    title: "Learn how to create web pages and websites using React",
  },
  {
    id: 2,
    title:
      "Have developed their software engineering and software development skills",
  },
  {
    id: 3,
    title:
      "Be positioned to contribute to a “tech culture” within organisations",
  },
  {
    id: 4,
    title:
      "Learn the different types of web technologies and how they work together",
  },
  {
    id: 5,
    title: "Know how to program using web technologies",
  },
  {
    id: 6,
    title: "Learn how to create web pages and websites",
  },
  {
    id: 7,
    title: "Be able to debug web code",
  },
  {
    id: 8,
    title: "Be familiar with data processing using JavaScript",
  },
];

const syllabus = [
  {
    id: 1,
    title: "Introduction to Web Development/HTML5",
    description:
      "A comprehensive course designed to equip learners with the fundamental skills to create dynamic and interactive websites. Dive into the world of HTML5 and discover the power of structuring web content, adding multimedia elements, and building responsive layouts to enhance user experience.",
    time: "3 hours 25 minutes to complete",
    week: "1",
  },
  {
    id: 2,
    title: "Introduction to CSS3",
    description:
      "Introduction to CSS3 is a transformative course that introduces learners to the wonders of Cascading Style Sheets (CSS). Gain a deep understanding of CSS3 advanced features and techniques to effortlessly style web pages, create stunning layouts, and bring visual appeal to your projects",
    time: "2 hours to complete",
    week: "2",
  },
  {
    id: 3,
    title: "HTML5 & CSS3",
    description:
      "HTML5 & CSS3 is an all-encompassing course that combines the power of HTML5 and CSS3 to create captivating and responsive websites. Dive into the world of web development as you master the art of structuring content with HTML5 and styling it with CSS3, unlocking limitless design possibilities.",
    time: "3 hours to complete",
    week: "3",
  },
  {
    id: 4,
    title: "Introduction to JavaScript",
    description:
      "Introduction to JavaScript is a foundational lesson that demystifies the power of JavaScript, the programming language of the web. Dive into the fundamentals of JavaScript syntax, variables, functions, and control flow, unlocking the ability to add interactivity and dynamic behavior to web pages.",
    time: "3 hours 40 minutes to complete",
    week: "4",
  },
];

const accordionItems = [
  {
    id: "1",
    title: "What kind of courses are offered at the Tech Training Academy?",
    content:
      "The Tech Training Academy offers a wide range of courses in various areas of technology, including programming, data science, cybersecurity, web development, and more. Our courses are designed to provide hands-on experience and practical skills that are in high demand in the industry.",
  },
  {
    id: "2",
    title: "How are the courses structured?",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    id: "3",
    title: "How long are the courses?",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    id: "4",
    title: "Is prior experience required for the courses?",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
];

function CourseDetailTab() {
  const [activeTab, setActiveTab] = useState<
    "about" | "learn" | "syllabus" | "faq"
  >("about");
  const [showExtraContent, setShowExtraContent] = useState(
    Array(syllabus.length).fill(false)
  );

  const handleSeeAllClick = (index: number) => {
    setShowExtraContent((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };
  const handleTabChange = (tab: "about" | "learn" | "syllabus" | "faq") => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:mt-10 mb-4 border-b border-gray-200">
        <ul
          className="flex -mb-px text-sm font-medium text-center"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg text-blue-600 ${
                activeTab === "about"
                  ? "border-blue-600 text-blue-600 hover:text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300"
              }`}
              type="button"
              role="tab"
              onClick={() => handleTabChange("about")}
            >
              About
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "learn"
                  ? "text-blue-600 border-blue-600 hover:text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300"
              }`}
              type="button"
              role="tab"
              onClick={() => handleTabChange("learn")}
            >
              What you’ll learn
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "syllabus"
                  ? "text-blue-600 border-blue-600 hover:text-blue-600 "
                  : "border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300"
              }`}
              type="button"
              role="tab"
              onClick={() => handleTabChange("syllabus")}
            >
              Syllabus
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "faq"
                  ? "text-blue-600  border-blue-600  hover:text-blue-600 "
                  : "border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300"
              }`}
              type="button"
              role="tab"
              onClick={() => handleTabChange("faq")}
            >
              FAQ
            </button>
          </li>
        </ul>
        <div className="flex items-center">
          {/* Dynamically render is user is enrolled or not */}
          <Link
            className="bg-[#1D63FE] text-white py-3 px-6 rounded-md mr-4"
            to=""
            style={{ textDecoration: "none", color: "white" }}
          >
            Enroll
          </Link>
          <p>Start Date: August 12, 2024</p>
        </div>
      </div>
      {activeTab === "about" && (
        <div>
          <h1 className="text-lmsPrimary mb-3">About this course</h1>
          <div className="">
            <h2 className="text-[1.16rem]">
              Welcome to the Frontend Development Course!
            </h2>
            <p className="text-[1rem] mt-2">
              This course is designed for individuals who are interested in
              learning the basics of frontend web development and taking their
              skills to the next level. Frontend development involves building
              the user interface of a website or web application, making it
              visually appealing and interactive for users.
            </p>
            <p className="text-[1rem] mt-2">
              In this course, you will learn the fundamental concepts and
              technologies used in frontend development, including HTML, CSS,
              and JavaScript. You will also gain hands-on experience building
              responsive and interactive web pages using popular frontend
              frameworks such as React.
            </p>
            <p className="text-[1rem] mt-2">
              Throughout the course, you will work on projects that challenge
              you to apply what you have learned and develop your skills as a
              frontend developer. You will also have access to a supportive
              community of peers and instructors who are dedicated to helping
              you succeed.
            </p>
            <p className="text-[1rem] mt-2">
              Whether you are a complete beginner or have some experience with
              frontend development, this course is designed to help you reach
              your goals and advance your career as a frontend developer. So,
              enroll now and start building the web of tomorrow!
            </p>
          </div>
        </div>
      )}
      {activeTab === "learn" && (
        <div className="mt-10">
          <h1 className="text-2xl font-semibold mb-4 mt-4">
            What you’ll learn
          </h1>
          <div className="flex gap-4 border p-5">
            <div className="flex flex-col gap-2">
              {learn.slice(0, 4).map((item) => (
                <ul key={item.id} className="flex flex-col gap-2">
                  <li className="flex space-x-3 items-center">
                    <GoDotFill />
                    <span className="text-base font-normal leading-tight text-gray-500">
                      {item.title}
                    </span>
                  </li>
                </ul>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {learn.slice(4).map((item) => (
                <ul key={item.id} className="flex flex-col gap-2">
                  <li className="flex space-x-3 items-center">
                    <GoDotFill />
                    <span className="text-base font-normal leading-tight text-gray-500 ">
                      {item.title}
                    </span>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      )}
      {activeTab === "syllabus" && (
        <div className="mt-20">
          <div className="flex flex-col rounded-lg">
            {syllabus.map((item, index) => (
              <div className="border bg-[#E8EFFF] flex items-center gap-6 mb-3 p-3 md:p-10">
                <div>
                  <span>Week</span>
                  <span className="text-4xl rounded-full bg-[#BBD0FF] flex justify-center items-center h-12 w-12">
                    {item.week}
                  </span>
                </div>

                <div>
                  <p className="flex items-center gap-3 font-normal text-[#1A183E]">
                    <PiClockCountdownFill />
                    {item.time}
                  </p>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <Link
                    to="/user/courses/:id/week/:weekId"
                    className="mb-2 text-xl font-bold tracking-tight text-[#1A183E]"
                  >
                    {item.title}
                  </Link>
                  <p className="font-normal text-[#1A183E]">
                    {item.description}
                  </p>
                  <p className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 font-normal text-[#1A183E]">
                      <MdOutlineSlowMotionVideo />1 video (Total 70 mins), 1
                      document, 1 test
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      {/* eslint-disable jsx-a11y/no-static-element-interactions */}
                      {/* eslint-disable jsx-a11y/click-events-have-key-events */}
                      <span
                        className="text-[#1D63FE] cursor-pointer"
                        onClick={() => handleSeeAllClick(index)}
                      >
                        {showExtraContent[index] ? "See Less" : "See All"}
                      </span>
                    </div>
                    {showExtraContent[index] && (
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2">
                          <h6 className="flex items-center gap-1">
                            <MdOutlineSlowMotionVideo /> 1 video Total - 70
                            minutes
                          </h6>
                          <p className="flex items-center gap-1">
                            Week 2 - Introduction to CSS3 Live Class Week 2 -
                            Introduction to CSS3 Live Class - 70 minutes
                          </p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <h6 className="flex items-center gap-1">
                            <FaBook /> 1 document - Total 20 minutes
                          </h6>
                          <Link to="" className="flex items-center gap-1">
                            <span className="text-blue-600"> Read more</span>{" "}
                            about CSS3 - 20 minutes
                          </Link>
                        </div>
                        <div className="flex flex-col gap-2">
                          <h6 className="flex items-center gap-1">
                            <MdCreditScore /> 1 test - Total 30 minutes
                          </h6>
                          <p className="flex items-center gap-1">
                            CSS3 Graded Test - 30 minutes
                          </p>
                        </div>
                      </div>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {activeTab === "faq" && (
        <div className="bg-[#DFE9FF] p-10 mt-10 md:mt-20">
          <h3 className="text-center font-bold mb-4">
            Frequently Asked Questions
          </h3>
          <Accordion items={accordionItems} />
        </div>
      )}
    </div>
  );
}

export default CourseDetailTab;
