import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./validationBox.css";

//Takes the credit card number input
export const ValidationBox = ({setResult}) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    if(value.length > 0){
        fetch("/credit-card-format/" + value)
        .then((response) => response.json())
        .then((json) => {
          setResult(json);
        });
    }
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Enter Credit Card Number"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
