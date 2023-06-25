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
exports.getApplyAllApi = exports.getApplyApi = exports.removeApply = exports.patchApply = exports.createApply = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const apply_model_1 = require("./apply.model");
const { ObjectId } = mongoose_1.default.Types;
// create Apply
const createApply = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = new apply_model_1.Apply(data);
    yield result.save();
    return result;
});
exports.createApply = createApply;
const patchApply = ({ _id, data, }) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: new ObjectId(_id) };
    const updateDoc = { $set: data };
    const option = { upsert: true };
    const result = yield apply_model_1.Apply.findByIdAndUpdate(query, updateDoc, option);
    return result;
});
exports.patchApply = patchApply;
// delete Apply
const removeApply = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield apply_model_1.Apply.findByIdAndDelete({ _id: new ObjectId(_id) });
    return result;
});
exports.removeApply = removeApply;
// get single Apply from DB
const getApplyApi = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield apply_model_1.Apply.findOne({ _id: new ObjectId(_id) });
    return result;
});
exports.getApplyApi = getApplyApi;
// get Apply all api from DB
const getApplyAllApi = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield apply_model_1.Apply.find();
    return result;
});
exports.getApplyAllApi = getApplyAllApi;
