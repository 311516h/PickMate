import { createDecisionAnalysis } from "../services/decisionService.js";

export async function analyzeDecision(req, res, next) {
  try {
    const result = await createDecisionAnalysis(req.body);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}
