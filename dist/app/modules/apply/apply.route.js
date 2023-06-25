"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const get Apply
const express_1 = __importDefault(require("express"));
const apply_controller_1 = require("./apply.controller");
const router = express_1.default.Router();
// post single Apply
router.post("/", apply_controller_1.createApplyApi);
// patch single Apply
router.patch("/:_id", apply_controller_1.updateApply);
// delete single Apply
router.delete("/:_id", apply_controller_1.deleteApply);
// single Apply
router.get("/:_id", apply_controller_1.getApply);
// all Apply
router.get("/", apply_controller_1.getApplys);
exports.default = router;
