import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
    name: {
        firstName: {
            type: String,
            trim: true,
            required: true,
        },
        middleName: {
            type: String,
            trim: true,
        },
        lastName: {
            type: String,
            trim: true,
            required: true,
        },
    },
    gender: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
    },
    contactNo: {
        type: Number,
        min: [9, "Invalid Number!"],
        required: true,
        unique: true
    },
    currentAddress: {
        type: String,
        trim: true,
        required: true,
    },
    permanentAddress: {
        type: String,
        trim: true,
        required: true,
    },
});

const User = model<IUser>("User", userSchema);

export { User };