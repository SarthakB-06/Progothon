// ChatPopup.jsx
import ChatUI from "./Chat-ui";

export default function ChatPopup({ isOpen, onToggle }) {
  return (
    <div className="btn btn-ghost fixed bottom-7 right-7 m-2">
      <img
        src="aimed.png"
        alt="logo"
        width="80"
        height="80"
        onClick={onToggle}
        style={{ cursor: "pointer" }}
      />
      {isOpen && <ChatUI />}
    </div>
  );
}