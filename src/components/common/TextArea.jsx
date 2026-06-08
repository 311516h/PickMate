import React from "react";

function TextArea({ label, hint, ...props }) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      <textarea className="text-area" rows="5" {...props} />
      {hint && <span className="field-hint">{hint}</span>}
    </label>
  );
}

export default TextArea;
