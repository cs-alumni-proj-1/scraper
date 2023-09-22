import express from "express";
import { HealthController } from "../controllers/health.controller";

const router = express.Router();
const healthController = new HealthController();

router.get("/", healthController.getHealthStatus);

router.post("/circulars", healthController.getCirculars);

export default router;
