import React, { useState } from "react";
import MobileLayout from "./components/layout/MobileLayout";
import Home from "./components/decision/Home";
import QuestionStep from "./components/decision/QuestionStep";
import OptionsStep from "./components/decision/OptionsStep";
import CriteriaStep from "./components/decision/CriteriaStep";
import LoadingView from "./components/decision/LoadingView";
import ResultView from "./components/decision/ResultView";

const initialForm = {
  question: "",
  optionA: "",
  optionB: "",
  criteria: "",
  context: ""
};

function App() {
  const [step, setStep] = useState("home");
  const [form, setForm] = useState(initialForm);
  const [result, setResult] = useState(null);

  const goNext = (nextStep) => setStep(nextStep);
  const goBack = (prevStep) => setStep(prevStep);

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
          setResult={setResult}
          onLoading={() => goNext("loading")}
          onResult={() => goNext("result")}
          onBack={() => goBack("options")}
        />
      )}

      {step === "loading" && <LoadingView />}

      {step === "result" && (
        <ResultView
          result={result}
          onRestart={() => {
            setForm(initialForm);
            setResult(null);
            goNext("home");
          }}
        />
      )}
    </MobileLayout>
  );
}

export default App;
