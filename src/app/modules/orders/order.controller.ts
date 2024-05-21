import { Request, Response } from "express";
import orderValidationSchema from "./order.validation";
import { createOrderService, getAllOrdersService } from "./order.service";

export const createNewOrderController = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const validateData = orderValidationSchema.parse(data);
    const newOrder = await createOrderService(validateData);

    res.status(200).json({
      success: true,
      message: "Order created successfully",
      data: newOrder,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message || "Internal server error",
    });
  }
};

// get all orders

export const getAllOrdersController = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    const getAllOrders = await getAllOrdersService(query);

    res.status(200).json({
      success: true,
      message: "Get all orders successfully",
      data: getAllOrders,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message || "Internal server error",
    });
  }
};
