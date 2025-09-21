import express from "express";
import { generateStory } from "../controllers/aiController.js";

const router = express.Router();

// POST /api/ai/story
router.post("/story", generateStory);

export default router;
