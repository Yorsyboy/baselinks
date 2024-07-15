import React, { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { AiFillCaretDown } from 'react-icons/ai';

export interface Option {
    text: string;
}

interface MenuProps {
    options: Option[];
    onSelect: (option: Option) => void;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    bg?: string;
    textColor?: string;
    size?: '24' | '28';
}

const MenuList: React.FC<MenuProps> = ({ options, onSelect, icon: IconComponent, bg, textColor, size = '24' }) => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const handleOptionClick = (option: Option) => {
        setSelectedOption(option);
        onSelect(option);
    };

    return (
        <div className="w-full">
            <Menu as="div" className="relative inline-block">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-transparent  px-4 py-2 text-sm font-medium ">
                        {IconComponent && <IconComponent className={`${size === '24' ? 'w-4 h-4' : 'w-6 h-6'}`} />}
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        className={`absolute z-50 top-[-50] right-0 mt-2 w-${size} origin-top-right divide-y divide-gray-100 rounded-md bg-${bg} shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                    >
                        {options.map((option) => (
                            <div key={option.text} className="px-1 py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            type="button"
                                            className={`${`text-${textColor}`} group flex w-full items-center rounded-md px-2 py-2 text-xs`}
                                            onClick={() => handleOptionClick(option)}
                                        >
                                            {option.text}
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>
                        ))}
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
};

export default MenuList;
