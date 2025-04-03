import { useState } from "react";
import axios from "axios";

const SOSButton = ({ userId }) => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSOS = async () => {
        if (!userId) {
            setMessage("User ID is missing. Please log in.");
            return;
        }

        setLoading(true);
        setMessage("");

        try {
            const response = await axios.post(`http://localhost:5000/api/sos/alert`, { userId });

            setMessage(response.data.message);
        } catch (error) {
            console.error("Error triggering SOS:", error);
            setMessage("Failed to send SOS alert. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="sos-container">
            <button
                onClick={handleSOS}
                disabled={loading}
                className="sos-button"
            >
                🚨 {loading ? "Sending..." : "Trigger SOS"}
            </button>
            {message && <p className="sos-message">{message}</p>}
        </div>
    );
};

export default SOSButton;
