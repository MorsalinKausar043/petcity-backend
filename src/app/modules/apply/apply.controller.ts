import { Request, Response } from "express";
import {
  createApply,
  getApplyApi,
  getApplyAllApi,
  patchApply,
  removeApply,
} from "./apply.service";

// create a single Apply
export const createApplyApi = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const Apply = await createApply(data);
    return res.status(201).json({ status: "success", data: Apply });
  } catch (error) {
    console.log(error);
    return res.status(201).json({ massage: error });
  }
};

// patch a single Apply
export const updateApply = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const data = req.body;
    const Apply = await patchApply({ _id, data });
    return res.status(201).json({ status: "success", data: Apply });
  } catch (error) {
    console.log(error);
    return res.status(201).json({ massage: error });
  }
};

// delete a single Apply
export const deleteApply = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const Apply = await removeApply(_id);
    return res.status(201).json({ status: "success", data: Apply });
  } catch (error) {
    console.log(error);
    return res.status(201).json({ massage: error });
  }
};

// get single Applys
export const getApply = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const Applys = await getApplyApi(_id);
    return res.status(201).json({ status: "success", data: Applys });
  } catch (error) {
    console.log(error);
    return res.status(201).json({ massage: error });
  }
};

// get all Applys
export const getApplys = async (req: Request, res: Response) => {
  try {
    const Applys = await getApplyAllApi();
    return res.status(201).json({ status: "success", data: Applys });
  } catch (error) {
    console.log(error);
    return res.status(201).json({ massage: error });
  }
};
