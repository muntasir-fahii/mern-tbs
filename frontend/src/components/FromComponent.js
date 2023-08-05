import React, { useState, useEffect } from "react";
import axios from "axios";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [sectors, setSectors] = useState([
    { id: 1, name: "Technology" },
    { id: 2, name: "Healthcare" },
    { id: 3, name: "Finance" },
    { id: 4, name: "Education" },
  ]);
  const [selectedSectors, setSelectedSectors] = useState([]);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    // Fetch sectors data from backend API and set the sectors state
    axios.get("/api/sectors").then((response) => {
      setSectors(response.data);
    });
  }, []);

  // Function to handle form submission
  const handleSubmit = () => {
    // Basic data validation (you can add more validation as needed)
    if (!name || selectedSectors.length === 0 || !agreeToTerms) {
      alert("Please fill in all fields.");
      return;
    }

    // Create the userData object
    const userData = {
      name: name,
      sectors: selectedSectors,
      agreeToTerms: agreeToTerms,
    };

    if (isEditMode) {
      // Update existing user data
      axios
        .put("/api/users", userData)
        .then((response) => {
          // Handle success or error response
          alert("User data updated successfully!");
          // (You may also want to handle state updates after a successful update)
        })
        .catch((error) => {
          console.error("Error updating user data:", error);
          alert("Failed to update user data. Please try again later.");
        });
    } else {
      // Save new user data
      axios
        .post("/api/users", userData)
        .then((response) => {
          // Handle success or error response
          alert("User data saved successfully!");
          // (You may also want to handle state updates after a successful save)
        })
        .catch((error) => {
          console.error("Error saving user data:", error);
          alert("Failed to save user data. Please try again later.");
        });
    }

    // Reset form fields after submission
    setName("");
    setSelectedSectors([]);
    setAgreeToTerms(false);
    setIsEditMode(false); // Reset edit mode after form submission
  };

  // JSX code for the form
  return (
    <div className="flex   justify-between items-center bg-rose-300 py-10 px-5">
      <div className="">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="">
        <label>Sectors:</label>
        <select
          value={selectedSectors}
          onChange={(e) =>
            setSelectedSectors(
              [...e.target.selectedOptions].map((option) => option.value)
            )
          }
          required
        >
          {/* Render the options for sectors */}
          {sectors.map((sector) => (
            <option key={sector.id} value={sector.id}>
              {sector.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>
          Agree to terms
          <input
            type="checkbox"
            checked={agreeToTerms}
            onChange={(e) => setAgreeToTerms(e.target.checked)}
          />
        </label>
      </div>
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default FormComponent;
