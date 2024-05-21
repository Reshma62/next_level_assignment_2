import Product from "../products/product.model";
import { IOrder } from "./order.interface";
import Order from "./order.model";

export const createOrderService = async (order: IOrder) => {
  const { productId } = order;
  const existsProduct = await Product.findOne({ _id: productId });
  if (!existsProduct) {
    throw new Error("Product not found");
  }
  const result = await Order.create(order);
  return result;
};

// get all orders
export const getAllOrdersService = async (query: Partial<IOrder>) => {
  // Use the find method with the query object
  const result = await Order.find(query).exec();
  return result;
};
