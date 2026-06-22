import React from "react";

import Button from "../common/Button";

function ResultView({ result, onRestart }) {
  if (!result) {
    return (
      <div className="screen result-screen">
        <h1>결과를 찾지 못했어요.</h1>
        <Button onClick={onRestart}>처음으로</Button>
      </div>
    );
  }

  const finalMessage =
    result.finalMessage ||
    `지금 조건에서는 ${result.recommendedOption} 쪽이 더 적합해 보여요.`;

  return (
    <div className="screen result-screen">
      <header className="result-header">
        <p className="eyebrow">AI 추천 결과</p>
        <h1>{result.recommendedOption}</h1>
        <p>{result.summary}</p>
      </header>

      <section className="result-section result-section-primary">
        <div className="result-section-head">
          <span className="section-icon" aria-hidden="true" />
          <h2>추천 이유</h2>
        </div>
        <ul>
          {result.reasons.map((reason) => (
            <li key={reason}>{reason}</li>
          ))}
        </ul>
      </section>

      <section className="result-section muted-section">
        <div className="result-section-head">
          <span className="section-icon section-icon-muted" aria-hidden="true" />
          <h2>다른 선택이 더 나을 수 있는 경우</h2>
        </div>
        <ul>
          {result.alternativeAdvice.map((advice) => (
            <li key={advice}>{advice}</li>
          ))}
        </ul>
      </section>

      <section className="final-message" aria-label="AI 코멘트">
        <span className="final-message-badge">AI 코멘트</span>
        <p>{finalMessage}</p>
      </section>

      <div className="bottom-action">
        <Button onClick={onRestart} variant="secondary">
          새 고민 시작하기
        </Button>
      </div>
    </div>
  );
}

export default ResultView;
