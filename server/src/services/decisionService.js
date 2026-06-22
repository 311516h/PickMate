export async function createDecisionAnalysis(input) {
  const { optionA, optionB, criteria, context } = input;

  return {
    recommendedOption: optionA,
    summary: `${criteria}을 기준으로 보면 지금은 ${optionA} 쪽이 조금 더 적합해 보여요.`,
    reasons: [
      `${criteria}을 중요하게 보고 있어서 선택 기준과 ${optionA}의 방향이 더 잘 맞습니다.`,
      `${context}을 고려하면 바로 큰 변화를 만들기보다 실행 가능한 선택부터 시작하는 편이 좋습니다.`,
      `${optionB}도 장점은 있지만, 현재 입력한 조건에서는 우선순위가 조금 덜 맞아 보입니다.`
    ],
    alternativeAdvice: [
      `${optionB}가 비용, 안정성, 시간 부담 면에서 확실히 유리하다면 다시 검토해볼 만합니다.`,
      "아직 정보가 부족하다면 1주일 정도 더 비교해보고 결정하는 것도 좋은 대안입니다."
    ],
    finalMessage: `지금 조건에서는 ${optionA}를 추천해요. 다만 바로 확정하기보다 작은 준비부터 시작해보세요.`
  };
}
