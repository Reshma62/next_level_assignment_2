import { IProduct } from "./product.interface";
import Product from "./product.model";

export const createProductService = async (product: IProduct) => {
  const result = await Product.create(product);
  return result;
};

export const getAllProductsService = async () => {
  const result = await Product.find();
  return result;
};

export const getProductByIdService = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
export const updateProductByIdService = async (
  id: string,
  product: IProduct
) => {
  const result = await Product.findByIdAndUpdate(id, product, { new: true });
  return result;
};

export const deleteProductByIdService = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

