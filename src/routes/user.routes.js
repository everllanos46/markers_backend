import container from "../container.js";
import { verifyToken } from "../middlewares/token.js";
import { Router } from "express";

const router = Router();

const userController = container.resolve("UserController");

router.get("/:id_user",verifyToken, userController.userById);
router.get("/",verifyToken, userController.get);
router.post("/login", userController.login);
router.post("/create", userController.add);

export default router;