import React from "react";

import Button from "../common/Button";
import Input from "../common/Input";
import StepHeader from "../common/StepHeader";
import { useDecisionForm } from "../../hooks/useDecisionForm";

function OptionsStep({ form, setForm, onNext, onBack }) {
  const { updateField } = useDecisionForm(form, setForm);
  const disabled = !form.optionA.trim() || !form.optionB.trim();

  return (
    <div className="screen">
      <StepHeader
        eyebrow="2 / 3"
        title="선택지를 입력해주세요."
        description="MVP에서는 두 가지 선택지만 비교해요."
        onBack={onBack}
      />

      <div className="stack">
        <Input
          label="A 선택지"
          value={form.optionA}
          onChange={updateField("optionA")}
          placeholder="예: 이직한다"
        />
        <Input
          label="B 선택지"
          value={form.optionB}
          onChange={updateField("optionB")}
          placeholder="예: 현재 회사에 남는다"
        />
      </div>

      <div className="bottom-action">
        <Button onClick={onNext} disabled={disabled}>
          다음
        </Button>
      </div>
    </div>
  );
}

export default OptionsStep;
