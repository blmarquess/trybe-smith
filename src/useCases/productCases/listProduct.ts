import { IRegisteredProduct } from './repository/product';
import ProductModel from '../../models/productModel';

export default class ListProduct {
  public model = new ProductModel();

  public async getAll(): Promise<IRegisteredProduct[] | null> {
    const product = await this.model.getAll();
    return product;
  }
}