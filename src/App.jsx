import React, { useState } from "react";
import MobileLayout from "./components/layout/MobileLayout";
import Home from "./components/decision/Home";
import QuestionStep from "./components/decision/QuestionStep";
import OptionsStep from "./components/decision/OptionsStep";
import CriteriaStep from "./components/decision/CriteriaStep";
import LoadingView from "./components/decision/LoadingView";
import ErrorView from "./components/decision/ErrorView";
import ResultView from "./components/decision/ResultView";
import { analyzeDecision } from "./api/decisionApi";

const initialForm = {
  question: "",
  optionA: "",
  optionB: "",
  criteria: "",
  context: ""
};

const MIN_LOADING_TIME = 700;

function wait(milliseconds) {
  return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
}

function App() {
  const [step, setStep] = useState("home");
  const [form, setForm] = useState(initialForm);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const goNext = (nextStep) => setStep(nextStep);
  const goBack = (prevStep) => setStep(prevStep);

  const runAnalysis = async () => {
    setError("");
    setStep("loading");

    try {
      const [analyzedResult] = await Promise.all([
        analyzeDecision(form),
        wait(MIN_LOADING_TIME)
      ]);
      setResult(analyzedResult);
      setStep("result");
    } catch (requestError) {
      setError(requestError.message || "분석 결과를 불러오지 못했어요.");
      setStep("error");
    }
  };

  const restart = () => {
    setForm(initialForm);
    setResult(null);
    setError("");
    setStep("home");
  };

  return (
    <MobileLayout>
      {step === "home" && <Home onStart={() => goNext("question")} />}

      {step === "question" && (
        <QuestionStep
          form={form}
          setForm={setForm}
          onNext={() => goNext("options")}
          onBack={() => goBack("home")}
        />
      )}

      {step === "options" && (
        <OptionsStep
          form={form}
          setForm={setForm}
          onNext={() => goNext("criteria")}
          onBack={() => goBack("question")}
        />
      )}

      {step === "criteria" && (
        <CriteriaStep
          form={form}
          setForm={setForm}
          onAnalyze={runAnalysis}
          onBack={() => goBack("options")}
        />
      )}

      {step === "loading" && <LoadingView />}

      {step === "error" && (
        <ErrorView
          message={error}
          onRetry={runAnalysis}
          onEdit={() => goBack("criteria")}
        />
      )}

      {step === "result" && (
        <ResultView result={result} onRestart={restart} />
      )}
    </MobileLayout>
  );
}

export default App;
