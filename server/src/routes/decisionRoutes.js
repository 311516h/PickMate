import { Router } from "express";
import { analyzeDecision } from "../controllers/decisionController.js";
import { validateDecisionInput } from "../validators/decisionValidator.js";

const router = Router();

router.post("/analyze", validateDecisionInput, analyzeDecision);

export default router;
