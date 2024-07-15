import TabComponent from "../../Components/Tab/Index";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const course = [
  {
    title: "Graphics Design",
    progress: "100%",
  },
  {
    title: "UI/UX Design",
    progress: "50%",
  },
  {
    title: "Photography",
    progress: "20%",
  },
];

function Dashboard() {
  const [formData, setFormData] = useState<any>({
    // accountType: selectedOption,
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    password: "",
    emailAddress: "",
    mobileNumber: "",
  });
  const [error, setErrors] = useState<any>({});

  const handleInputChange = (name: string, value: any) => {
    setFormData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="mt-5">
      <div className="flex ">
        <div className="block w-full rounded-lg bg-neutral-50 shadow-secondary-1">
          <h1 className="border-b-2 border-black/20 px-6 py-3 text-lmsPrimary font-bold">
            Courses Progress
          </h1>
          <div className="px-2 py-3">
            {course.map((c) => (
              <div>
                <ul className="list-disc mt-5 pl-4">
                  <li>{c.title}</li>
                </ul>
                <div className="w-full bg-neutral-200">
                  <div
                    className="bg-green-500 p-0.5 text-center text-sm font-medium leading-none text-white"
                    style={{ width: `${c.progress}` }}
                  >
                    {c.progress}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4">
        
        <TabComponent />
      </div>
    </div>
  );
}

export default Dashboard;
