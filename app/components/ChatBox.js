"use client";
import { useState } from "react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi there! How can I help you?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    setMessages((prev) => [...prev, { from: "user", text: input }]);
    // You can replace this with an actual bot response logic/API
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Thanks for your question!" },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 h-96 bg-white shadow-xl border rounded-lg flex flex-col">
          <div className="bg-blue-400 text-black px-4 py-2 flex justify-between items-center rounded-t-lg">
            <span>💬 ChatBot</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md max-w-xs ${
                  msg.from === "bot"
                    ? "bg-gray-400 text-left"
                    : "bg-blue-400 text-right ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-2 border-t flex text-black">
            <input
              className="flex-1 border p-1 rounded mr-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg"
        >
          💬
        </button>
      )}
    </div>
  );
}
