import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
const app: Application = express();

// import route
import jobRouter from "./app/modules/job/job.route";
import applyRouter from "./app/modules/apply/apply.route";
// use middleware
app.use(cors());
app.use(express.json());

// use custom url
app.use("/job", jobRouter);
app.use("/apply", applyRouter);

app.get("/", (req: Request, res: Response, next: NextFunction) =>
  res
    .status(201)
    .send({ status: true, massage: "Hello World This is Pet-City Api!" })
);

export default app;
