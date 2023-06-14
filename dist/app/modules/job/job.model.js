"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    jobType: {
        type: String,
        required: true,
    },
    jobCategory: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    photoURL: {
        type: String,
        required: true,
    },
}, { timestamps: true });
const Job = (0, mongoose_1.model)("Job", userSchema);
exports.Job = Job;
