import React from "react";
import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const Home = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-base-200 flex flex-col pt-16 px-2">
      <div className="bg-base-100 rounded-lg shadow-lg w-full max-w-6xl mx-auto flex-1 min-h-0 flex flex-row overflow-hidden">
        {/* Sidebar: always visible, 20% width */}
        <div className="w-1/4 border-r border-base-300 h-full">
          <Sidebar />
        </div>

        {/* Chat View: 80% width */}
        <div className="w-4/5 h-full overflow-hidden">
          {!selectedUser ? (
            <div className="flex h-full items-center justify-center">
              <NoChatSelected />
            </div>
          ) : (
            <ChatContainer />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
