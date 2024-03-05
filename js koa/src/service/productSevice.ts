import { AppDataSource } from "../datasource";
import { Product } from "../entity/product";

export const deleteProduct = async (productId: number) => {
  const productRepo = AppDataSource.getRepository(Product);
  if (productRepo && productId) {
    await productRepo.softDelete(productId);
  }
};
