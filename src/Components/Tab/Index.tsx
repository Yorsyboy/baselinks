import { SubmitButton } from "../Button/Index";
import Input from "Components/Forms/Input";
import Select from "..//Forms/Select";
import TextArea from "../Forms/TextArea";
import React, { useState } from "react";

type FormData = {
  name: string;
  description: string;
};

const TabComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"form" | "table">("form");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
  });
  const [ticketCategory, setTicketCategory] = useState("Technical");
  const [ticketStatus, setTicketStatus] = useState("pending");

  const handleTabChange = (tab: "form" | "table") => {
    setActiveTab(tab);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // You can handle form submission here
    console.log(formData);
  };

  return (
    <div>
      <div className="flex justify-between items-center max-w-5xl mx-auto md:mt-10 mb-4 border-b border-gray-200">
        <h1 className=" font-bold mt-5">Report an issue</h1>
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg text-blue-600 ${
                activeTab === "form"
                  ? "border-blue-600  text-blue-600  hover:text-blue-600 "
                  : "border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300"
              }`}
              type="button"
              role="tab"
              onClick={() => handleTabChange("form")}
            >
              Create Ticket
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "table"
                  ? "text-blue-600 border-blue-600  hover:text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300"
              }`}
              type="button"
              role="tab"
              onClick={() => handleTabChange("table")}
            >
              My Tickets
            </button>
          </li>
        </ul>
      </div>
      {activeTab === "form" && (
        <form className="p-4 rounded max-w-5xl mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium ">
              Ticket category *
            </label>
            <Select
              id="name"
              options={[
                { name: "", value: "" },
                { name: "General", value: "general" },
                { name: "Technical", value: "technical" },
                { name: "Billing", value: "billing" },
              ]}
            />
          </div>
          <div className="mb-4">
            <TextArea
              label="Description *"
              size="lg"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-[25%]">
            <SubmitButton>Submit</SubmitButton>
          </div>
        </form>
      )}
      {activeTab === "table" && (
        <table className="border-collapse border w-1/2 md:ml-20">
          <thead>
            <tr>
              <th className="border p-2">Ticket Category</th>
              <th className="border p-2">Ticket Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">{ticketCategory}</td>
              <td className="border p-2">{ticketStatus}</td>
            </tr>
            <tr>
              <td className="border p-2">{ticketCategory}</td>
              <td className="border p-2">{ticketStatus}</td>
            </tr>
            <tr>
              <td className="border p-2">{ticketCategory}</td>
              <td className="border p-2">{ticketStatus}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TabComponent;
