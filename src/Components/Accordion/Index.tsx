import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

type AccordionItem = {
    id: string;
    title: string;
    content: string;
    type?: string;
};

type AccordionProps = {
    items: AccordionItem[];
    type?: string;
} & React.HTMLAttributes<HTMLDivElement>; // Extend the props with HTMLAttributes

const Accordion: React.FC<AccordionProps> = ({ items, type, className, ...rest }) => {
    const [activeItem, setActiveItem] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setActiveItem((prevId) => (prevId === id ? null : id));
    };

    return (
        <div className={className} {...rest}>
            {type === 'faq'
                ? items.map((item) => (
                      <div className="shadow-2xl bg-white w-full focus:outline-none focus-visible:ring focus-visible:ring-opacity-50  ">
                          <Menu key={item.id}>
                              <div className={`${activeItem === item.id ? '-mb-[2rem]' : 'mb-8'}`}>
                                  <Menu.Button
                                      onClick={() => toggleAccordion(item.id)}
                                      aria-expanded={activeItem === item.id}
                                      aria-controls={`content-${item.id}`}
                                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-lmsPrimary"
                                  >
                                      <MdOutlineArrowDropDownCircle className={`${activeItem === item.id ? 'transform rotate-90' : ''} w-6 h-16`} />
                                      {item.title}
                                  </Menu.Button>
                              </div>
                              <Menu.Items>
                                  <Menu.Item>
                                      <div
                                          id={`content-${item.id}`}
                                          className={`${
                                              activeItem === item.id ? 'block mb-8' : 'hidden'
                                          } p-4 bg-white rounded-md shadow-md`}
                                          role="region"
                                          aria-labelledby={`button-${item.id}`}
                                      >
                                          {item.content}
                                      </div>
                                  </Menu.Item>
                              </Menu.Items>
                          </Menu>
                      </div>
                  ))
                : items.map((item) => (
                      <div className="bg-white w-full focus:outline-none focus-visible:ring focus-visible:ring-opacity-50  ">
                          <Menu key={item.id}>
                              <div className={`${activeItem === item.id ? '-mb-[2rem]' : 'mb-8'}`}>
                                  <Menu.Button
                                      onClick={() => toggleAccordion(item.id)}
                                      aria-expanded={activeItem === item.id}
                                      aria-controls={`content-${item.id}`}
                                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-lmsPrimary"
                                  >
                                      <MdOutlineArrowDropDownCircle className={`${activeItem === item.id ? 'transform rotate-90' : ''} w-6 h-16`} />
                                      {item.title}
                                  </Menu.Button>
                              </div>
                              <Menu.Items>
                                  <Menu.Item>
                                      <div
                                          id={`content-${item.id}`}
                                          className={`${
                                              activeItem === item.id ? 'block mb-8' : 'hidden'
                                          } p-4 bg-white rounded-md shadow-md`}
                                          role="region"
                                          aria-labelledby={`button-${item.id}`}
                                      >
                                          {item.content}
                                      </div>
                                  </Menu.Item>
                              </Menu.Items>
                          </Menu>
                      </div>
                  ))}
        </div>
    );
};

export default Accordion;
