import React, { useState } from 'react'; 
import './Dynamic.css';
function Dynamic() {
  const [inputValue, setInputValue] = useState("");
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
  ];

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (newValue.trim() !== "") {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  return (
    <div>
      <h1>Dynamic Images on Input</h1>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleInputChange}
        style={{
          padding: "10px",
          margin: "20px 0",
          fontSize: "16px",
        }}
      />
      {inputValue.trim() && (
        <div>
          <img
            src={images[imageIndex]}
            alt={`Dynamic ${imageIndex}`}
            style={{
              display: "block",
              marginTop: "20px",
              borderRadius: "10px",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Dynamic;
