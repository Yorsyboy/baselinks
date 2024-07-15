import React from 'react';
import { Link } from 'react-router-dom';


const Lecture: React.FC = () => {

  return (
    <div className="mt-4 flex flex-col md:flex-row gap-2 md:gap-0">
      <div className="w-full md:w-3/4 md:pr-4">
        <div className="bg-white p-4 shadow-md rounded-md">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Lecture 1: Introduction to React</h1>
            <Link to="/user/assessments" className="bg-blue-500 text-white px-4 py-2 rounded-md">Start Quiz</Link>
          </div>
          <div className="mt-4">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/4UZrsTqkcW4"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="mt-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec aliquam purus. Sed
              eget justo ac nunc lacinia euismod. In hac habitasse platea dictumst. Ut vel
              sollicitudin mi. Nulla facilisi. Nullam euismod, risus nec interdum lacinia, metus
              turpis tincidunt libero, nec mollis lacus arcu vel nunc. Nullam auctor, nunc ac
              fermentum ultricies, libero nisi ultricies justo, nec luctus ligula nunc ac dui.
              Integer nec nisl nec nulla tincidunt viverra. Nullam auctor, nunc ac fermentum
              ultricies, libero nisi ultricies justo, nec luctus ligula nunc ac dui. Integer nec nisl
              nec nulla tincidunt viverra.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/4 md:pl-4">
        <div className="bg-white p-4 shadow-md rounded-md">
          <h1 className="text-xl font-semibold">Course Content</h1>
          <ul className="mt-4">
            <li className="py-2 border-b">
              <a href="#" className="text-blue-500">Lecture 1: Introduction to React</a>
            </li>
            <li className="py-2 border-b">
              <a href="#" className="text-blue-500">Lecture 2: React Components</a>
            </li>
            <li className="py-2 border-b">
              <a href="#" className="text-blue-500">Lecture 3: React Hooks</a>
            </li>
            <li className="py-2 border-b">
              <a href="#" className="text-blue-500">Lecture 4: React Router</a>
            </li>
            <li className="py-2 border-b">
              <a href="#" className="text-blue-500">Lecture 5: Redux</a>
            </li>
          </ul>
          </div>
      </div>
    </div>
  );
};

export default Lecture;
