import React from "react";

interface MessageProps {
  sender: string;
  message: string;
  align: "left" | "right";
  seen?: boolean;
}

const Message: React.FC<MessageProps> = ({ sender, message, align, seen }) => {
  const isLeft = align === "left";

  return (
    <div className={`col-start-${isLeft ? 1 : 6} col-end-${isLeft ? 8 : 13} p-3 rounded-lg`}>
      <div className={`flex items-center ${isLeft ? '' : 'justify-start flex-row-reverse'}`}>
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
          {sender}
        </div>
        <div className={`relative ${isLeft ? 'ml-3' : 'mr-3'} text-sm bg-${isLeft ? 'white' : 'indigo-100'} py-2 px-4 shadow rounded-xl`}>
          <div>{message}</div>
          {seen && (
            <div className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
              Seen
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
