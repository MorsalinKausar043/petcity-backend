// const get user 
import express from "express";
import { createUserApi, deleteUser, getUser, getUsers, updateUser } from "./job.controller";
const router = express.Router();

// all users 
router.get("/", getUsers);
// single users 
router.get("/:_id", getUser);
// post single users 
router.post("/", createUserApi);
// patch single users 
router.patch("/:_id", updateUser);
// delete single users 
router.delete("/:_id", deleteUser);

export default router;