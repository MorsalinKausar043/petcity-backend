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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUserApi = exports.getUser = exports.getUsers = void 0;
const job_service_1 = require("./job.service");
;
// get all users 
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, job_service_1.getJobsApi)();
        return res.status(201).json({ status: "success", data: users });
    }
    catch (error) {
        console.log(error);
        return res.status(201).json({ massage: error });
    }
});
exports.getUsers = getUsers;
// get single users 
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const users = yield (0, job_service_1.getJobApi)(_id);
        return res.status(201).json({ status: "success", data: users });
    }
    catch (error) {
        console.log(error);
        return res.status(201).json({ massage: error });
    }
});
exports.getUser = getUser;
// create a single user 
const createUserApi = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const user = yield (0, job_service_1.createJob)(data);
        return res.status(201).json({ status: "success", data: user });
    }
    catch (error) {
        console.log(error);
        return res.status(201).json({ massage: error });
    }
});
exports.createUserApi = createUserApi;
// create a single user 
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const data = req.body;
        const user = yield (0, job_service_1.patchJob)({ _id, data });
        return res.status(201).json({ status: "success", data: user });
    }
    catch (error) {
        console.log(error);
        return res.status(201).json({ massage: error });
    }
});
exports.updateUser = updateUser;
// create a single user 
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const user = yield (0, job_service_1.removeJob)(_id);
        return res.status(201).json({ status: "success", data: user });
    }
    catch (error) {
        console.log(error);
        return res.status(201).json({ massage: error });
    }
});
exports.deleteUser = deleteUser;
