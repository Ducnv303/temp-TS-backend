import "reflect-metadata";
import express from "express";
import cors from "cors";
import helmet from "helmet";
const { ExpressAdapter, createBullBoard, BullAdapter, BullMQAdapter } = require('@bull-board/express');
import httpResponse from "@app-helpers/http.response";
import {
	admin,
} from "@app-apis/router";
import {
	bull_job
} from '@app-queues/queues';
import { createExpressServer } from "routing-controllers"

/* bull board */
const appAdapter = new ExpressAdapter();
appAdapter.setBasePath('/admin/queues');

const { addQueue, removeQueue, setQueues, replaceQueues } = createBullBoard({
	queues: [
		new BullMQAdapter(bull_job),
	],
	serverAdapter: appAdapter,
});

/* app express */
const app = express();

app.set("trust proxy", true);
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "100mb" }));
app.use(httpResponse);

app.use("/v1/admin", admin)
app.use('/admin/queues', appAdapter.getRouter());

export default app;