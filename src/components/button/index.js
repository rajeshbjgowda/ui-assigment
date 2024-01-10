import React from "react";
import "./buttonStyles.scss";
const CustomButton = ({ label, onClick, disabled, error }) => {
  return (
    <button
      className="custom-button"
      onClick={onClick}
      disabled={disabled}
      error={error}
    >
      {label}
    </button>
  );
};

export default CustomButton;
