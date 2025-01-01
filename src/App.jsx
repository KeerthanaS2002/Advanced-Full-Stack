import React, { useState, createContext } from "react";
import Hen from "./Hen";

export let nameContext = createContext();

function App() {
  const [isBlackBackground, setIsBlackBackground] = useState(false);

  const toggleBackground = () => {
    setIsBlackBackground((prev) => !prev);
  };

  const appStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: isBlackBackground ? "#000000" : "#f9f9f9",
    color: isBlackBackground ? "#ffffff" : "#333",
    transition: "background-color 0.5s ease, color 0.5s ease",
    fontFamily: "'Arial', sans-serif",
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    backgroundColor: isBlackBackground ? "#1a1a1a" : "#ffffff",
    color: isBlackBackground ? "#ffffff" : "#333",
    width: "350px",
    textAlign: "center",
    transition: "background-color 0.5s ease, color 0.5s ease",
  };

  const headerStyle = {
    fontSize: "1.8rem",
    marginBottom: "15px",
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: "1px",
  };

  const buttonStyle = {
    marginTop: "20px",
    padding: "12px 25px",
    fontSize: "14px",
    fontWeight: "bold",
    borderRadius: "25px",
    border: "none",
    backgroundColor: isBlackBackground ? "#e67e22" : "#3498db",
    color: "#fff",
    cursor: "pointer",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
  };

  return (
    <nameContext.Provider value={{ value: "water", isBlackBackground }}>
      <div style={appStyle}>
        <div style={cardStyle}>
          <h1 style={headerStyle}>
            {isBlackBackground ? "Dark Mode" : "Light Mode"}
          </h1>
          <Hen />
          <button onClick={toggleBackground} style={buttonStyle}>
            Toggle Theme
          </button>
        </div>
      </div>
    </nameContext.Provider>
  );
}

export default App;
