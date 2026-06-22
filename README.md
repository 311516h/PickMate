# PickMate

사용자의 고민과 선택 조건을 정리해 더 합리적인 결정을 돕는 모바일 기반 의사결정 도우미입니다.

PickMate는 정답을 대신 정해주는 서비스가 아닙니다. 사용자가 입력한 두 가지 선택지와 중요한 기준, 현재 상황을 비교해 추천 이유와 대안이 더 나을 수 있는 조건을 함께 보여줍니다.

## 주요 기능

- 고민 입력
- 두 가지 선택지 입력
- 중요한 판단 기준과 현재 상황 입력
- 분석 로딩 화면
- 추천 선택, 추천 이유, 대안 조건, AI 코멘트 제공
- 새 고민 시작하기
- 모바일 화면 중심의 반응형 UI

현재 버전은 실제 AI API 대신 더미 분석 함수를 사용합니다. 입력한 내용을 기반으로 결과 형태를 만들어 전체 사용자 흐름을 확인할 수 있습니다.

## 사용자 흐름

```text
홈
  -> 고민 입력
  -> 선택지 입력
  -> 판단 기준 및 현재 상황 입력
  -> 분석 로딩
  -> 결과 확인
```

## 기술 스택

- React 18
- Vite 5
- JavaScript
- CSS
- 프론트엔드 상태 관리: React `useState`
- 데이터 저장: 현재 미사용
- 분석 API: 더미 응답

## 실행 방법

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

터미널에 표시되는 주소로 접속합니다. 기본 주소는 다음과 같습니다.

```text
http://localhost:5173
```

### 3. 프로덕션 빌드

```bash
npm run build
```

## 프로젝트 구조

```text
src/
├─ api/
│  └─ decisionApi.js          # 더미 분석 함수
├─ components/
│  ├─ layout/
│  │  └─ MobileLayout.jsx     # 모바일 앱 프레임
│  ├─ common/
│  │  ├─ Button.jsx
│  │  ├─ Input.jsx
│  │  ├─ TextArea.jsx
│  │  └─ StepHeader.jsx
│  └─ decision/
│     ├─ Home.jsx
│     ├─ QuestionStep.jsx
│     ├─ OptionsStep.jsx
│     ├─ CriteriaStep.jsx
│     ├─ LoadingView.jsx
│     └─ ResultView.jsx
├─ hooks/
│  └─ useDecisionForm.js      # 폼 필드 변경 처리
├─ App.jsx                    # 화면 단계 및 입력/결과 상태 관리
├─ main.jsx                   # React 진입점
└─ styles.css                 # 공통 스타일 및 컬러 변수
```

## 입력 데이터 구조

```js
{
  question: "",
  optionA: "",
  optionB: "",
  criteria: "",
  context: ""
}
```

## 결과 데이터 구조

```js
{
  recommendedOption: "맥북",
  summary: "현재 조건에서는 맥북이 조금 더 적합해 보여요.",
  reasons: [
    "추천 이유 1",
    "추천 이유 2",
    "추천 이유 3"
  ],
  alternativeAdvice: [
    "다른 선택이 더 나을 수 있는 조건"
  ],
  finalMessage: "지금 조건에서는 맥북을 추천해요."
}
```

## 디자인 설정

주요 색상은 `src/styles.css`의 `:root`에 CSS 변수로 정의되어 있습니다.

```css
:root {
  --primary: #5b4bff;
  --secondary: #8b5cf6;
  --accent: #c084fc;
  --background: #f8f7ff;
}
```

이 값을 변경하면 버튼, 결과 카드, 입력 포커스 등 전체 색상 톤을 함께 조정할 수 있습니다.

## 향후 개발 계획

- Node.js와 Express 기반 분석 API 추가
- OpenAI API 연동 및 JSON 응답 검증
- 로딩 및 API 오류 처리 강화
- 입력 내용 `localStorage` 저장
- 분석 히스토리와 즐겨찾기 기능
- Spring Boot 및 MySQL 기반 백엔드 확장

## 현재 개발 단계

Phase 1인 모바일 UI, 입력 폼, 더미 결과 화면 구현까지 완료된 상태입니다.
