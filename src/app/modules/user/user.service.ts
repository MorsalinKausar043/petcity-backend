import { IUser } from "./user.interface"
import { User } from "./user.model"
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;
// get users from DB 
export const getUsersApi = async (): Promise<IUser[] | []> => {
    const result = await User.find();
    return result;
};

// get single user from DB 
export const getUserApi = async (_id: string): Promise<IUser | null> => {
    const result = await User.findOne({ _id: new ObjectId(_id) });
    return result;
};

// create user 
export const createUser = async (data: IUser): Promise<IUser> => {
    const user = new User(data);
    await user.save();
    return user;
}
// create user 
interface IPatchType {
    _id: string,
    data: IUser
}
export const patchUser = async <IPatchType>({ _id, data }): Promise<IUser | null> => {
    const query = { _id: new ObjectId(_id) };
    const updateDoc = { $set: data };
    const option = { upsert: true };
    const result = await User.findByIdAndUpdate(query, updateDoc, option);
    return result;
}
// delete user 
export const removeUser = async (_id: string): Promise<IUser | null> => {
    const user = await User.findByIdAndDelete({ _id: new ObjectId(_id) })
    return user;
}