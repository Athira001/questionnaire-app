import React from "react";
 import "./style.css";

export const TextAreaField = ({ name, rows, onChange, placeholder="Placeholder text"})=> {

  return(
    <textarea
    className="text-field"
    rows={rows}
    name={name}
    placeholder={placeholder}
    onChange={(e) => onChange(e, name)}
  />
  );
}