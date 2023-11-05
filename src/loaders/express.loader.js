import express from "express";
import cors from 'cors';
import compression from "compression";
import helmet from "helmet";
import routes from "../routes/routes.js";

const app = express();

app
	.use(express.json())
	.use(cors())
	.use(helmet())
	.use(compression());

app.use(routes);

export default app;
