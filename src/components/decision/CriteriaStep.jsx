import React from "react";

import { analyzeDecision } from "../../api/decisionApi";
import Button from "../common/Button";
import StepHeader from "../common/StepHeader";
import TextArea from "../common/TextArea";
import { useDecisionForm } from "../../hooks/useDecisionForm";

function CriteriaStep({ form, setForm, setResult, onLoading, onResult, onBack }) {
  const { updateField } = useDecisionForm(form, setForm);
  const disabled = !form.criteria.trim() || !form.context.trim();

  const handleAnalyze = async () => {
    onLoading();
    const analyzedResult = await analyzeDecision(form);
    setResult(analyzedResult);
    onResult();
  };

  return (
    <div className="screen">
      <StepHeader
        eyebrow="3 / 3"
        title="선택할 때 중요한 기준은 무엇인가요?"
        description="기준과 현재 상황을 나누어 적으면 결과가 더 명확해져요."
        onBack={onBack}
      />

      <div className="stack">
        <TextArea
          label="중요한 기준"
          value={form.criteria}
          onChange={updateField("criteria")}
          placeholder="예: 연봉, 성장 가능성, 안정성, 워라밸"
          hint="쉼표로 나열해도 좋아요."
        />
        <TextArea
          label="내 상황"
          value={form.context}
          onChange={updateField("context")}
          placeholder="예: 지금 회사는 안정적이지만 성장이 느림"
        />
      </div>

      <div className="bottom-action">
        <Button onClick={handleAnalyze} disabled={disabled}>
          AI에게 물어보기
        </Button>
      </div>
    </div>
  );
}

export default CriteriaStep;
