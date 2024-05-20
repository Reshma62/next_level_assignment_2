import { Request, Response } from "express";
import { createProductService } from "./product.services";

export const createProductController = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const product = await createProductService(data);

    res.status(200).json({
      success: true,
      message: "New product created successfully",
      data: product,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message || "Internal server error",
    });
  }
};
