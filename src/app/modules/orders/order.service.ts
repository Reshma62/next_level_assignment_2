import { IInventory } from "../products/product.interface";
import Product from "../products/product.model";
import { IOrder } from "./order.interface";
import Order from "./order.model";

export const createOrderService = async (order: IOrder) => {
  const { productId, quantity } = order;
  const existsProduct = await Product.findOne({ _id: productId });
  if (!existsProduct) {
    throw new Error("Product not found");
  }

  if ((existsProduct.inventory as IInventory).quantity === 0) {
    await Product.findOneAndUpdate(
      { _id: productId },
      { $set: { "inventory.inStock": false } },
      { new: true }
    );

    throw new Error("Out of stock");
  }
  if ((existsProduct.inventory as IInventory).quantity < quantity) {
    throw new Error("Insufficient quantity available in inventory");
  }
  const result = await Order.create(order);
  await Product.findOneAndUpdate(
    { _id: productId },
    { $inc: { "inventory.quantity": -quantity } },
    { new: true }
  );
  return result;
};

// get all orders
export const getAllOrdersService = async (query: Partial<IOrder>) => {
  // Use the find method with the query object
  const result = await Order.find(query).exec();
  if (result.length === 0) {
    throw new Error("Order not found");
  }
  return result;
};
