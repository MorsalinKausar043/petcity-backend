"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJobsApi = exports.getJobApi = exports.removeJob = exports.patchJob = exports.createJob = void 0;
const job_model_1 = require("./job.model");
const mongoose_1 = __importDefault(require("mongoose"));
const { ObjectId } = mongoose_1.default.Types;
// create Job
const createJob = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = new job_model_1.Job(data);
    yield result.save();
    return result;
});
exports.createJob = createJob;
const patchJob = ({ _id, data, }) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: new ObjectId(_id) };
    const updateDoc = { $set: data };
    const option = { upsert: true };
    const result = yield job_model_1.Job.findByIdAndUpdate(query, updateDoc, option);
    return result;
});
exports.patchJob = patchJob;
// delete Job
const removeJob = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield job_model_1.Job.findByIdAndDelete({ _id: new ObjectId(_id) });
    return result;
});
exports.removeJob = removeJob;
// get single Job from DB
const getJobApi = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield job_model_1.Job.findOne({ _id: new ObjectId(_id) });
    return result;
});
exports.getJobApi = getJobApi;
// get Jobs from DB
const getJobsApi = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield job_model_1.Job.find();
    return result;
});
exports.getJobsApi = getJobsApi;
