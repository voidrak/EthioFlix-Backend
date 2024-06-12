import express from "express";
import { getAllMovies } from "../controllers/controller";

const router = express.Router();

router.route("/").get(getAllMovies);

export default router;
