import express, { Router } from "express"
import { createPodcast, deletePodcast, getAllPodcast } from "../controllers/podcast.js";

const router = express.Router();

router.post("/createpodcast", createPodcast);
router.delete("/deletepodcast/:Id", deletePodcast);
router.get("/allpodcast", getAllPodcast);

export default router;