import React from "react";

interface ConversationButtonProps {
  name: string;
  initial: string;
  unreadCount?: number;
}

const ConversationButton: React.FC<ConversationButtonProps> = ({
  name,
  initial,
  unreadCount,
}) => (
  <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
    <div className={`flex items-center justify-center h-8 w-8 rounded-full bg-${initial === 'M' ? 'gray' : 'indigo'}-200`}>
      {initial}
    </div>
    <div className="ml-2 text-sm font-semibold">{name}</div>
    {unreadCount && (
      <div className="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">
        {unreadCount}
      </div>
    )}
  </button>
);

export default ConversationButton;
