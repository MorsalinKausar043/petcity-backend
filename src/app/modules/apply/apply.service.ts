
import mongoose from "mongoose";
import { IApply } from "./apply.interface";
import { Apply } from "./apply.model";
const { ObjectId } = mongoose.Types;

// create Apply
export const createApply = async (data: IApply): Promise<IApply> => {
  const result = new Apply(data);
  await result.save();
  return result;
};

// patch Apply
interface IPatchType {
  _id: string;
  data: IApply;
}
export const patchApply = async ({
  _id,
  data,
}: IPatchType): Promise<IApply | null> => {
  const query = { _id: new ObjectId(_id) };
  const updateDoc = { $set: data };
  const option = { upsert: true };
  const result = await Apply.findByIdAndUpdate(query, updateDoc, option);
  return result;
};

// delete Apply
export const removeApply = async (_id: string): Promise<IApply | null> => {
  const result = await Apply.findByIdAndDelete({ _id: new ObjectId(_id) });
  return result;
};

// get single Apply from DB
export const getApplyApi = async (_id: string): Promise<IApply | null> => {
  const result = await Apply.findOne({ _id: new ObjectId(_id) });
  return result;
};

// get Apply all api from DB
export const getApplyAllApi = async (): Promise<IApply[] | []> => {
  const result = await Apply.find();
  return result;
};
