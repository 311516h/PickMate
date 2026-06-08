import React from "react";

function Button({ children, variant = "primary", full = true, ...props }) {
  const className = `button button-${variant}${full ? " button-full" : ""}`;

  return (
    <button className={className} type="button" {...props}>
      {children}
    </button>
  );
}

export default Button;
