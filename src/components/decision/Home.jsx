import React from "react";

import Button from "../common/Button";

function Home({ onStart }) {
  return (
    <div className="screen home-screen">
      <div className="brand-area">
        <div className="brand-mark">P</div>
        <p className="eyebrow">PickMate</p>
      </div>

      <section className="home-copy">
        <h1>오늘의 선택, 혼자 고민하지 마세요.</h1>
        <p>
          고민과 선택지를 정리하면 PickMate가 조건을 비교해서 더 합리적인 선택을
          도와드릴게요.
        </p>
      </section>

      <div className="example-list" aria-label="고민 예시">
        <span>맥북 vs 윈도우</span>
        <span>이직 vs 잔류</span>
        <span>자취 vs 통학</span>
      </div>

      <div className="bottom-action">
        <Button onClick={onStart}>고민 시작하기</Button>
      </div>
    </div>
  );
}

export default Home;
