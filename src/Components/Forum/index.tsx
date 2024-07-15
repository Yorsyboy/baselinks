import React from "react";
import ConversationButton from "./ConversationButton";
import Message from "./Message";
import MessageInput from "./MessageInput";
import { UserOne } from "../../Assets/Index";

const Chat: React.FC = () => {
  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-col md:flex-row h-full w-full overflow-x-auto">
        <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
          <div className="flex flex-row items-center justify-center h-12 w-full">
            <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                ></path>
              </svg>
            </div>
            <div className="ml-2 font-bold text-2xl">Forum</div>
          </div>
          <div className="flex flex-col mt-8">
            <div className="flex flex-row items-center justify-between text-xs">
              <span className="font-bold">Active Conversations</span>
              <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">4</span>
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48">
              <ConversationButton name="Tobi" initial="T" unreadCount={3} />
              <ConversationButton name="Michael" initial="M" />
              <ConversationButton name="Gideon" initial="G" unreadCount={1} />
              <ConversationButton name="Folakemi" initial="F" />
              <ConversationButton name="Joan" initial="J" />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-auto h-full p-6">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
            <div className="flex flex-col h-full overflow-x-auto mb-4">
              <div className="flex flex-col h-full">
                <div className="">
                  <Message sender="A" message="Hey How are you?" align="left" seen />
                  <Message sender="T" message="I'm good. How about you?" align="right" seen />
                  <Message sender="A" message="Great! Did you complete the project?" align="left" seen />
                  <Message sender="T" message="Yes, it's all done." align="right" seen />
                </div>
              </div>
            </div>
            <MessageInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
