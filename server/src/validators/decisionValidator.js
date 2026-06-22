const requiredFields = [
  ["question", "고민"],
  ["optionA", "A 선택지"],
  ["optionB", "B 선택지"],
  ["criteria", "판단 기준"],
  ["context", "현재 상황"]
];

export function validateDecisionInput(req, res, next) {
  const missingFields = requiredFields
    .filter(([key]) => typeof req.body?.[key] !== "string" || !req.body[key].trim())
    .map(([, label]) => label);

  if (missingFields.length > 0) {
    return res.status(400).json({
      message: "필수 입력값을 확인해주세요.",
      fields: missingFields
    });
  }

  req.body = Object.fromEntries(
    Object.entries(req.body).map(([key, value]) => [
      key,
      typeof value === "string" ? value.trim() : value
    ])
  );

  next();
}
