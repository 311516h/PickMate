export function createDecisionPrompt({ question, optionA, optionB, criteria, context }) {
  return `
당신은 사용자의 선택을 대신 결정하지 않고, 입력한 조건을 정리해 합리적인 판단을 돕는 의사결정 도우미입니다.

[고민]
${question}

[선택지]
A: ${optionA}
B: ${optionB}

[중요한 기준]
${criteria}

[현재 상황]
${context}

두 선택지를 비교하고 추천 선택, 요약, 추천 이유, 다른 선택이 더 나을 수 있는 조건, 마지막 한 줄 조언을 작성하세요.
반드시 지정된 JSON 형식으로만 응답하세요.
  `.trim();
}
