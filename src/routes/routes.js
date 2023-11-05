//const path = require('path');

import { Router } from "express";

import User from "./user.routes.js";
import Project from "./project.routes.js";

const router = Router();
const apiRouter = Router();
const secretKey = 'ebe45';

apiRouter.get("/", (req, res) => {
	res.status(200).send({
		status: 200,
		message: "Microservicio servicios",
	});
});

router.use("/api", apiRouter);

apiRouter.use("/user", User);
apiRouter.use("/project", Project);

export default router;