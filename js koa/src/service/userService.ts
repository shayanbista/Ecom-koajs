import { User } from "../entity/User";
import { AppDataSource } from "../datasource";

export const deleteUser = async (userId: number) => {
  const productRepo = AppDataSource.getRepository(User);
  if (productRepo && userId) {
    await productRepo.softDelete(userId);
  }
};
