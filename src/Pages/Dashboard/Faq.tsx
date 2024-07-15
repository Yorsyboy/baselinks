import Accordion from '../../Components/Accordion/Index'
import React from 'react'

const accordionItems = [
    {
      id: "1",
      title: "What kind of courses are offered at the Baselink  Academy?",
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

const Faq = () => {
  return (
    <div className="bg-[#DFE9FF] p-10 mt-4 md:mt-4">
          <h3 className="text-center font-bold mb-4">
            Frequently Asked Questions
          </h3>
          <Accordion items={accordionItems} />
        </div>
  )
}

export default Faq