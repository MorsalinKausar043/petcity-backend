"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const get user
const express_1 = __importDefault(require("express"));
const job_controller_1 = require("./job.controller");
const router = express_1.default.Router();
// post single users
router.post("/", job_controller_1.createUserApi);
// patch single users
router.patch("/:_id", job_controller_1.updateUser);
// delete single users
router.delete("/:_id", job_controller_1.deleteUser);
// single users
router.get("/:_id", job_controller_1.getUser);
// all users
router.get("/", job_controller_1.getUsers);
exports.default = router;
