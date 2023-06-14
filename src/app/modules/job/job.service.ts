import { IJob } from "./job.interface";
import { Job } from "./job.model";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

// get Jobs from DB
export const getJobsApi = async (): Promise<IJob[] | []> => {
  const result = await Job.find();
  return result;
};

// get single Job from DB
export const getJobApi = async (_id: string): Promise<IJob | null> => {
  const result = await Job.findOne({ _id: new ObjectId(_id) });
  return result;
};

// create Job
export const createJob = async (data: IJob): Promise<IJob> => {
  const result = new Job(data);
  await result.save();
  return result;
};

// patch Job
interface IPatchType {
  _id: string;
  data: IJob;
}
export const patchJob = async ({
  _id,
  data,
}: IPatchType): Promise<IJob | null> => {
  const query = { _id: new ObjectId(_id) };
  const updateDoc = { $set: data };
  const option = { upsert: true };
  const result = await Job.findByIdAndUpdate(query, updateDoc, option);
  return result;
};

// delete Job
export const removeJob = async (_id: string): Promise<IJob | null> => {
  const result = await Job.findByIdAndDelete({ _id: new ObjectId(_id) });
  return result;
};
