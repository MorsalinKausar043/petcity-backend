// const get Apply
import express from "express";
import {
  createApplyApi,
  deleteApply,
  getApply,
  getApplys,
  updateApply,
} from "./apply.controller";
const router = express.Router();

// post single Apply
router.post("/", createApplyApi);
// patch single Apply
router.patch("/:_id", updateApply);
// delete single Apply
router.delete("/:_id", deleteApply);
// single Apply
router.get("/:_id", getApply);
// all Apply
router.get("/", getApplys);

export default router;
