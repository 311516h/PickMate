import React from "react";

import Button from "../common/Button";

function ErrorView({ message, onRetry, onEdit }) {
  return (
    <div className="screen error-screen" role="alert">
      <div className="error-mark" aria-hidden="true">
        !
      </div>

      <div className="error-copy">
        <p className="eyebrow">분석 요청 실패</p>
        <h1>결과를 불러오지 못했어요.</h1>
        <p>{message}</p>
      </div>

      <div className="error-actions">
        <Button onClick={onRetry}>다시 시도</Button>
        <Button onClick={onEdit} variant="outline">
          입력 내용 수정하기
        </Button>
      </div>
    </div>
  );
}

export default ErrorView;
