import { IProduct } from "./product.interface";
import Product from "./product.model";

export const createProductService = async (product: IProduct) => {
  const result = await Product.create(product);
  return result;
};

// serach product with all product

export const searchProductService = async (searchTerm: string) => {
  
  let matchStage = {};

  if (searchTerm) {
    const lowerCaseSearchTerm = (searchTerm as string).toLowerCase();
    const regexMatch= { $regex: lowerCaseSearchTerm, $options: "i" }
    matchStage = {
      $or: [
        { name: regexMatch },
        { description: regexMatch },
      ],
    };
  }

  const pipeline = [{ $match: matchStage }];

  const result = await Product.aggregate(pipeline).exec();
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


