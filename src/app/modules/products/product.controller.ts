import { Request, Response } from "express";
import {
  createProductService,
  deleteProductByIdService,
  getProductByIdService,
  searchProductService,
  updateProductByIdService,
} from "./product.service";
import { validateProduct } from "./product.validation";
// create product
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
// get all products
// serach product
export const searchProductController = async (req: Request, res: Response) => {
  try {
    const searchTerm = req?.query?.searchTerm as string;
    console.log(searchTerm, "searchTerm");
    const products = await searchProductService(searchTerm);
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

// get product by id
export const getProductByIdController = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const product = await getProductByIdService(productId);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: product,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message || "Internal server error",
    });
  }
};

// get product by id
export const updateProductByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const { productId } = req.params;
    const data = req.body;
    const product = await updateProductByIdService(productId, data);
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message || "Internal server error",
    });
  }
};

// delete product by id
export const deleteProductByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const { productId } = req.params;
    await deleteProductByIdService(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: null,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message || "Internal server error",
    });
  }
};


