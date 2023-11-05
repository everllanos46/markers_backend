import container from "../container.js";
import { verifyToken } from "../middlewares/token.js";
import { Router } from "express";

const router = Router();

const projectController = container.resolve("ProjectController");

router.get("/",verifyToken, projectController.get);
router.post("/year",verifyToken, projectController.getYear);
router.post("/add",verifyToken, projectController.add);
router.put("/update",verifyToken, projectController.update);


export default router;