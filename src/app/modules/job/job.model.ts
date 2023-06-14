import { Schema, model } from "mongoose";
import { IJob } from "./job.interface";

const userSchema = new Schema<IJob>(
  {
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
  },
  { timestamps: true }
);

const Job = model<IJob>("Job", userSchema);

export { Job };
