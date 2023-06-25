"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apply = void 0;
const mongoose_1 = require("mongoose");
const applySchema = new mongoose_1.Schema({
    jobId: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
const Apply = (0, mongoose_1.model)("apply", applySchema);
exports.Apply = Apply;
