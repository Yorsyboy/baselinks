import React, { ReactNode } from "react";
import { TERipple } from "tw-elements-react";

interface CardProps {
    title: string;
    imageUrl: string;
    properties?: string[];
}

const Card: React.FC<CardProps> = ({ title, imageUrl, properties }) => {
    return (
        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <TERipple>
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img className="rounded-t-lg w-full h-48" src={imageUrl} alt="" />
                    <a href="#!">
                        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                </div>
            </TERipple>
            <div className="p-6">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{title}</h3>
                <div>
                    {properties && (
                        <div className="flex flex-wrap mt-4">
                            {properties.map((property, index) => (
                                <span key={index} className="text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded-full mr-2 mt-2">{property}</span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
