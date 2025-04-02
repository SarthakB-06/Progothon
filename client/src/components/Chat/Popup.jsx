// ChatPopup.jsx
import { useState } from "react";
import ChatUI from "./Chat-ui";

export default function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="btn btn-ghost fixed bottom-7 right-7 m-2 z-20">
      <img
        src="aimed.png"
        alt="logo"
        width="80"
        height="80"
        onClick={handleToggle}
        style={{ cursor: "pointer" }}
      />
      {isOpen && <ChatUI />}
    </div>
  );
}