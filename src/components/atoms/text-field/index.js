import React from "react";

import "./style.css";

export const InputField = ({type="text", name, onChange,placeholder="Placeholder text..." })=> {
  return(
    <input
    className="input-field"
    type={type}
    name={name}
    placeholder={placeholder}
    onChange={(e) => onChange(e, name)}
  />
  );
}