import React from "react";

function Input({ label, hint, ...props }) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      <input className="text-input" {...props} />
      {hint && <span className="field-hint">{hint}</span>}
    </label>
  );
}

export default Input;
