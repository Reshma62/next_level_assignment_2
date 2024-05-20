import { IProduct } from "./product.interface";
import Product from "./product.model";

export const createProductService = async (product: IProduct) => {
  const result = await Product.create(product);
  return result;
};
