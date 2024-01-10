import React from "react";
import "./textFeildStyles.scss";

const TextFeild = ({ id, value, onChange, label, error }) => {
  return (
    <div className="textFeild-wrapper">
      <div className={`input-container ${error ? "input-error" : ""}`}>
        <input
          type="text"
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          aria-labelledby="field-label"
        />
        <label className="label" htmlFor={id} id="field-label">
          <div className="text">{label}</div>
        </label>
      </div>
      <div className="helperText">
        <span>{value.length}/10</span>
      </div>
    </div>
  );
};

export default TextFeild;
