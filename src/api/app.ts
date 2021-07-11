import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";

import indexRouter from "./routes/index";

const app = express();

app.use(cors());
app.use(logger("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);

export default app;
