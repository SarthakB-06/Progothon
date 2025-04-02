import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const SosPage = () => {
  const { user, isAuthenticated } = useAuth0();
  const userId = isAuthenticated ? user.sub : null;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");
  const [contacts, setContacts] = useState([{ name: "", phone: "" }]);

  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:5000/api/sos/${userId}`)
        .then((res) => {
          if (res.data) {
            setName(res.data.name);
            setPhone(res.data.phone);
            setEmail(res.data.email);
            setBloodGroup(res.data.bloodGroup || "");
            setMedicalHistory(res.data.medicalHistory || "");
            setContacts(res.data.emergencyContacts || [{ name: "", phone: "" }]);
          }
        })
        .catch(() => {});
    }
  }, [userId]);

  const handleSave = async () => {
    if (!userId) {
      alert("Please log in to save your emergency info!");
      return;
    }

    const data = { userId, name, phone, email, bloodGroup, medicalHistory, emergencyContacts: contacts };
    await axios.post("http://localhost:5000/api/sos", data);
    alert("Emergency information saved!");
  };

  const addContact = () => {
    setContacts([...contacts, { name: "", phone: "" }]);
  };

  const handleContactChange = (index, field, value) => {
    const updatedContacts = [...contacts];
    updatedContacts[index][field] = value;
    setContacts(updatedContacts);
  };

  const removeContact = (index) => {
    if (contacts.length > 1) {
      setContacts(contacts.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg border border-red-500">
      <h2 className="text-3xl font-bold text-red-600 text-center mb-4">Emergency SOS Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Info Section */}
        <div className="p-4 border border-red-300 rounded-lg">
          <h3 className="text-xl font-bold text-gray-700 mb-2">🩺 Personal Information</h3>
          <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 mt-2 rounded" />
          <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)}
            className="w-full border p-2 mt-2 rounded" />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 mt-2 rounded" />

          {/* Blood Group Dropdown */}
          <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}
            className="w-full border p-2 mt-2 rounded">
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>

          {/* Medical History Input */}
          <textarea placeholder="Enter any past medical history (e.g., Diabetes, Heart Disease, Allergies, etc.)"
            value={medicalHistory} onChange={(e) => setMedicalHistory(e.target.value)}
            className="w-full border p-2 mt-2 rounded"></textarea>
        </div>

        {/* Emergency Contacts Section */}
        <div className="p-4 border border-red-300 rounded-lg">
          <h3 className="text-xl font-bold text-gray-700 mb-2">🚨 Emergency Contacts</h3>
          {contacts.map((contact, index) => (
            <div key={index} className="flex space-x-2 mt-2">
              <input type="text" placeholder="Contact Name" value={contact.name}
                onChange={(e) => handleContactChange(index, "name", e.target.value)}
                className="border p-2 rounded w-1/2" />
              <input type="text" placeholder="Phone Number" value={contact.phone}
                onChange={(e) => handleContactChange(index, "phone", e.target.value)}
                className="border p-2 rounded w-1/2" />
              <button onClick={() => removeContact(index)} className="bg-red-500 text-white p-2 rounded">
                ❌
              </button>
            </div>
          ))}
          <button onClick={addContact} className="mt-2 bg-green-500 text-white p-2 rounded">
            ➕ Add Contact
          </button>
        </div>
      </div>

      <button onClick={handleSave} className="w-full mt-6 bg-red-600 text-white p-3 rounded hover:bg-red-700">
        Save Emergency Info
      </button>
    </div>
  );
};

export default SosPage;
