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
exports.getApplys = exports.getApply = exports.deleteApply = exports.updateApply = exports.createApplyApi = void 0;
const apply_service_1 = require("./apply.service");
// create a single Apply
const createApplyApi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const Apply = yield (0, apply_service_1.createApply)(data);
        return res.status(201).json({ status: "success", data: Apply });
    }
    catch (error) {
        console.log(error);
        return res.status(201).json({ massage: error });
    }
});
exports.createApplyApi = createApplyApi;
// patch a single Apply
const updateApply = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const data = req.body;
        const Apply = yield (0, apply_service_1.patchApply)({ _id, data });
        return res.status(201).json({ status: "success", data: Apply });
    }
    catch (error) {
        console.log(error);
        return res.status(201).json({ massage: error });
    }
});
exports.updateApply = updateApply;
// delete a single Apply
const deleteApply = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const Apply = yield (0, apply_service_1.removeApply)(_id);
        return res.status(201).json({ status: "success", data: Apply });
    }
    catch (error) {
        console.log(error);
        return res.status(201).json({ massage: error });
    }
});
exports.deleteApply = deleteApply;
// get single Applys
const getApply = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const Applys = yield (0, apply_service_1.getApplyApi)(_id);
        return res.status(201).json({ status: "success", data: Applys });
    }
    catch (error) {
        console.log(error);
        return res.status(201).json({ massage: error });
    }
});
exports.getApply = getApply;
// get all Applys
const getApplys = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Applys = yield (0, apply_service_1.getApplyAllApi)();
        return res.status(201).json({ status: "success", data: Applys });
    }
    catch (error) {
        console.log(error);
        return res.status(201).json({ massage: error });
    }
});
exports.getApplys = getApplys;
