import { Request, Response } from "express";
import {
  createProductService,
  getAllProductsService,
} from "./product.services";
import { validateProduct } from "./product.validation";

export const createProductController = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    // Validate the data
    const validatedData = validateProduct(data);
    const product = await createProductService(validatedData);

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

export const getAllProductsController = async (req: Request, res: Response) => {
  try {
    const products = await getAllProductsService();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message || "Internal server error",
    });
  }
};
