// src/ChatUI.jsx
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
    Send,
    Heart,
    AlertCircle,
    Mic,
    MessageSquare,
    Bell,
} from "lucide-react";

export default function ChatUI() {
  const [messages, setMessages] = useState([
    { text: "Hi, how can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await axios.post("http://localhost:5000/api/chat", {
        message: input,
      });

      const botMessage = { text: response.data.reply, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching response from backend:", error);
      const errorMessage = {
        text: "Sorry, I couldn't process your request. Please try again.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[500px] w-full max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-red-100">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 bg-red-700 text-white">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3 shadow-md">
            <Heart className="h-6 w-6 text-red-700" />
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight">MedAI Advisor</h2>
            <p className="text-red-100 text-xs flex items-center">
              <Bell className="h-3 w-3 mr-1" /> Your Health Assistant
            </p>
          </div>
        </div>
        <AlertCircle className="h-6 w-6 text-red-100 hover:text-white cursor-pointer" title="Emergency Alert" />
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-red-50">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            } mb-4`}
          >
            <div
              className={`max-w-[75%] p-3 rounded-2xl flex items-start ${
                message.sender === "user"
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-white text-gray-800 shadow-md border border-red-100"
              } transition-all duration-200`}
            >
              {message.sender === "bot" && (
                <MessageSquare className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
              )}
              <p className="text-sm leading-relaxed">{message.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <div className="flex items-center p-3 bg-white border-t border-red-100">
        <button className="p-2 text-red-600 hover:text-red-700">
          <Mic className="h-5 w-5" title="Voice Input" />
        </button>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask me anything..."
          className="flex-1 p-2.5 rounded-full bg-red-50 text-gray-800 placeholder-red-300 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-200 mx-2"
        />
        <button
          onClick={handleSendMessage}
          className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-200"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}