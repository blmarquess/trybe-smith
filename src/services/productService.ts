import { IRegisteredProduct } from '../@types/product';
import ProductModel from '../models/productModel';

export default class ProductService {
  public model = new ProductModel();

  public async getAll(): Promise<IRegisteredProduct[] | null> {
    const product = await this.model.getAll();
    return product;
  }
}