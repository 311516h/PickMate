import React from "react";

import Button from "../common/Button";
import StepHeader from "../common/StepHeader";
import TextArea from "../common/TextArea";
import { useDecisionForm } from "../../hooks/useDecisionForm";

function QuestionStep({ form, setForm, onNext, onBack }) {
  const { updateField } = useDecisionForm(form, setForm);
  const disabled = form.question.trim().length < 3;

  return (
    <div className="screen">
      <StepHeader
        eyebrow="1 / 3"
        title="어떤 선택을 고민하고 있나요?"
        description="고민을 자연스럽게 적어주세요."
        onBack={onBack}
      />

      <TextArea
        label="고민"
        value={form.question}
        onChange={updateField("question")}
        placeholder="예: 맥북을 살까, 윈도우 노트북을 살까?"
        hint="짧게 적어도 괜찮아요."
      />

      <div className="bottom-action">
        <Button onClick={onNext} disabled={disabled}>
          다음
        </Button>
      </div>
    </div>
  );
}

export default QuestionStep;
