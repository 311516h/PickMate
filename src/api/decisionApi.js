const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
const REQUEST_TIMEOUT = 30000;

export async function analyzeDecision(form) {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

  try {
    const response = await fetch(`${API_BASE_URL}/api/decisions/analyze`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form),
      signal: controller.signal
    });

    const data = await parseResponse(response);

    if (!response.ok) {
      throw new Error(data.message || "선택 분석 요청에 실패했습니다.");
    }

    if (
      typeof data.recommendedOption !== "string" ||
      typeof data.summary !== "string" ||
      !Array.isArray(data.reasons) ||
      !Array.isArray(data.alternativeAdvice)
    ) {
      throw new Error("분석 결과 형식이 올바르지 않아요. 다시 시도해주세요.");
    }

    const finalMessage =
      typeof data.finalMessage === "string" && data.finalMessage.trim()
        ? data.finalMessage.trim()
        : `지금 조건에서는 ${data.recommendedOption} 쪽이 더 적합해 보여요.`;

    return {
      ...data,
      finalMessage
    };
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("분석 시간이 오래 걸리고 있어요. 잠시 후 다시 시도해주세요.");
    }

    if (error instanceof TypeError) {
      throw new Error("서버에 연결할 수 없어요. 백엔드 서버가 실행 중인지 확인해주세요.");
    }

    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
}

async function parseResponse(response) {
  try {
    return await response.json();
  } catch {
    return {};
  }
}
