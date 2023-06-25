"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// import route
const job_route_1 = __importDefault(require("./app/modules/job/job.route"));
const apply_route_1 = __importDefault(require("./app/modules/apply/apply.route"));
// use middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// use custom url
app.use("/job", job_route_1.default);
app.use("/apply", apply_route_1.default);
app.get("/", (req, res, next) => res
    .status(201)
    .send({ status: true, massage: "Hello World This is Pet-City Api!" }));
exports.default = app;
