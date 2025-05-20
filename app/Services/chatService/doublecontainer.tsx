"use client";
import React, { useState} from "react";
import { FiCopy, FiUsers, FiMessageSquare, FiShare2, FiCode } from "react-icons/fi";

const DobContainer = () => {
  const [code, setCode] = useState(`// Welcome to our collaborative editor\nfunction greet() {\n  return "Hello, team!";\n}`);
  const [language, setLanguage] = useState("javascript");
  const [collaborators] = useState([
    { id: 1, name: "You", avatar: "👩💻", online: true },
    { id: 2, name: "Alex", avatar: "🧑💻", online: true },
    { id: 3, name: "Sam", avatar: "👨💻", online: false }
  ]);
  const [messages, setMessages] = useState([
    { user: "Alex", text: "I've optimized the function", time: "2:45 PM" },
    { user: "You", text: "Nice! Let's test it", time: "2:46 PM" }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [roomId] = useState("x7y9z2");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { user: "You", text: newMessage, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' }) }]);
      setNewMessage("");
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen w-full px-4 py-6">
      <div className="w-full max-w-6xl bg-gray-800 shadow-2xl rounded-xl overflow-hidden flex flex-col h-[80vh]">
        {/* Header */}
        <div className="bg-gray-700 p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FiCode className="text-purple-400 text-xl" />
            <h2 className="text-white font-bold">Collaborative Editor</h2>
            <span className="bg-purple-500 text-xs text-white px-2 py-1 rounded ml-2">
              {language.toUpperCase()}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-300 text-sm">
              <FiUsers className="mr-1" />
              <span>{collaborators.filter(c => c.online).length} online</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-300 text-sm mr-2">Room ID:</span>
              <span className="text-white font-mono bg-gray-600 px-2 py-1 rounded">
                {roomId}
              </span>
              <button 
                onClick={() => navigator.clipboard.writeText(roomId)}
                className="ml-2 text-gray-400 hover:text-white"
              >
                <FiCopy />
              </button>
            </div>
            <button className="flex items-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded hover:opacity-90">
              <FiShare2 className="mr-2" />
              Invite
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Editor Column */}
          <div className="flex-1 flex flex-col border-r border-gray-700">
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-700 text-white p-2 border-b border-gray-600 focus:outline-none"
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
            </select>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="flex-1 bg-gray-900 text-gray-100 p-4 font-mono text-sm resize-none focus:outline-none"
              spellCheck="false"
            />
            <div className="bg-gray-700 p-2 flex justify-between items-center">
              <div className="flex space-x-2">
                <button className="bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded text-sm">
                  Run Code
                </button>
                <button className="bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded text-sm">
                  Format
                </button>
              </div>
              <button className="bg-purple-600 hover:bg-purple-500 text-white px-3 py-1 rounded text-sm">
                Save
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-80 flex flex-col bg-gray-700">
            {/* Collaborators */}
            <div className="p-4 border-b border-gray-600">
              <h3 className="text-white font-medium mb-3 flex items-center">
                <FiUsers className="mr-2" />
                Collaborators
              </h3>
              <div className="space-y-2">
                {collaborators.map((user) => (
                  <div key={user.id} className="flex items-center">
                    <span className="text-xl mr-2">{user.avatar}</span>
                    <span className={`text-sm ${user.online ? 'text-green-400' : 'text-gray-400'}`}>
                      {user.name}
                      {user.online && (
                        <span className="ml-1 text-xs">●</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat */}
            <div className="flex-1 flex flex-col">
              <div className="p-4 border-b border-gray-600">
                <h3 className="text-white font-medium flex items-center">
                  <FiMessageSquare className="mr-2" />
                  Chat
                </h3>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.user === "You" ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs rounded-lg px-3 py-2 ${msg.user === "You" ? 'bg-purple-600 text-white' : 'bg-gray-600 text-white'}`}>
                      <div className="text-xs font-medium mb-1">
                        {msg.user}
                      </div>
                      <div className="text-sm">{msg.text}</div>
                      <div className="text-xs opacity-70 text-right mt-1">
                        {msg.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 border-t border-gray-600">
                <div className="flex">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type a message..."
                    className="flex-1 bg-gray-600 text-white px-3 py-2 rounded-l focus:outline-none"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-purple-600 hover:bg-purple-500 text-white px-3 py-2 rounded-r"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DobContainer;