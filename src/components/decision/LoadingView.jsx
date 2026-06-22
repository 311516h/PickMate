import React from "react";

function LoadingView() {
  return (
    <div className="screen loading-screen" aria-live="polite" aria-busy="true">
      <div className="loader" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <h1>조건을 비교하고 있어요.</h1>
      <p>입력한 고민, 선택지, 기준을 바탕으로 더 합리적인 방향을 정리하는 중입니다.</p>
    </div>
  );
}

export default LoadingView;
