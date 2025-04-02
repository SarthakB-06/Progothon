import React, { useState, useEffect, useRef, Component } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Send, Heart, AlertCircle, Mic, MessageSquare, Bell } from "lucide-react";

// Error Boundary Component
class ErrorBoundary extends Component {
  state = { hasError: false, errorMessage: "" };

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-red-600 text-sm">
          Error rendering message: {this.state.errorMessage}
        </div>
      );
    }
    return this.props.children;
  }
}

export default function ChatUI() {
  const [messages, setMessages] = useState([
    { text: "Hi, I'm your health assistant. How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);
  const [isVoiceSupported, setIsVoiceSupported] = useState(true);

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      setIsVoiceSupported(false);
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => setIsRecording(true);
    recognition.onend = () => setIsRecording(false);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput((prev) => prev + transcript);
    };

    recognition.onerror = () => {
      setIsVoiceSupported(false);
      setIsRecording(false);
    };

    recognitionRef.current = recognition;
  }, []);

  const startVoiceRecognition = () => {
    recognitionRef.current?.start();
  };

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
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/chat",
        { message: input },
        { timeout: 10000 }
      );

      const botMessage = {
        text: response.data.reply,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching response from backend:", error);
      const errorMessage = {
        text:
          error.response?.data?.message ||
          "Sorry, I couldn't process your request. Please try again.",
        sender: "bot",
        isError: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isLoading) {
      handleSendMessage();
    }
  };

  const handleEmergencyClick = () => {
    alert("Emergency feature not yet implemented.");
  };

  return (
    <div className="flex flex-col h-[75vh] sm:h-[80vh] w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-red-200">
      {/* Header */}
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
        <button
          onClick={handleEmergencyClick}
          className="p-1 text-red-100 hover:text-white cursor-pointer"
          title="Emergency Alert"
        >
          <AlertCircle className="h-6 w-6" />
        </button>
      </div>

      {/* Messages Area */}
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
                  : `bg-white ${
                      message.isError ? "text-red-600" : "text-gray-800"
                    } shadow-md border border-red-200`
              } transition-all duration-200`}
            >
              {message.sender === "bot" && (
                <MessageSquare
                  className={`h-5 w-5 mr-2 flex-shrink-0 ${
                    message.isError ? "text-red-600" : "text-red-600"
                  }`}
                />
              )}
              <div>
                <ErrorBoundary>
                  <ReactMarkdown>{message.text}</ReactMarkdown>
                </ErrorBoundary>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Bar */}
      <div className="flex items-center p-3 bg-white border-t border-red-200">
        {isVoiceSupported && (
          <button
            className={`p-2 ${
              isRecording ? "text-green-600" : "text-red-600"
            } hover:text-red-700`}
            onClick={startVoiceRecognition}
            disabled={isLoading}
          >
            <Mic className="h-5 w-5" title="Voice Input" />
          </button>
        )}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask me anything..."
          disabled={isLoading}
          className="flex-1 p-2.5 rounded-full bg-red-50 text-gray-800 placeholder-red-300 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-200 mx-2 disabled:opacity-50"
        />
        <button
          onClick={handleSendMessage}
          disabled={isLoading}
          className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
