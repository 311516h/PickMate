import React from "react";

import Button from "./Button";

function StepHeader({ eyebrow, title, description, onBack }) {
  return (
    <header className="step-header">
      {onBack && (
        <Button variant="ghost" full={false} onClick={onBack} aria-label="이전으로">
          ←
        </Button>
      )}
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {description && <p className="description">{description}</p>}
      </div>
    </header>
  );
}

export default StepHeader;
