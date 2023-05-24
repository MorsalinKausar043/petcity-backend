import { NextFunction, Request, Response  } from "express";
import { createUser, getUserApi, getUsersApi, patchUser, removeUser } from "./user.service";

// get all users 
export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await getUsersApi();
        return res.status(201).json({ status: "success", data: users })
    } catch (error) {
        console.log(error)
        return res.status(201).json({massage:error})
    }
}

// get single users 
export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {_id} = req.params;
        const users = await getUserApi(_id);
        return res.status(201).json({ status: "success", data: users })
    } catch (error) {
        console.log(error)
        return res.status(201).json({massage:error})
    }
}

// create a single user 
export const createUserApi = async (req:Request,res:Response, next:NextFunction) => {
    try {
        const data = req.body;
        const user = await createUser(data);
        return res.status(201).json({ status: "success", data: user })
        
    } catch (error) {
        console.log(error)
        return res.status(201).json({ massage: error })
    }
}

// create a single user 
export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { _id } = req.params;
        const data = req.body;
        const user = await patchUser({_id, data});
        return res.status(201).json({ status: "success", data: user })

    } catch (error) {
        console.log(error)
        return res.status(201).json({ massage: error })
    }
}

// create a single user 
export const deleteUser = async (req:Request,res:Response, next:NextFunction) => {
    try {
        const {_id} = req.params;
        const user = await removeUser(_id);
        return res.status(201).json({ status: "success", data: user })
        
    } catch (error) {
        console.log(error)
        return res.status(201).json({ massage: error })
    }
}

