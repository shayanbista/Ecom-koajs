import { AppDataSource } from "../datasource";
import { ProductImages } from "../entity/ProductImages";

export const deleteProductImages = async (imageId: number) => {
  const productImagesRepo = AppDataSource.getRepository(ProductImages);
  if (productImagesRepo && imageId) {
    await productImagesRepo.softDelete(imageId);
  }
};
