import { IRegisteredProduct } from '../@types/product';
import ProductModel from '../models/productModel';

export default class ProductService {
  public model = new ProductModel();

  public getAll = async (): Promise<IRegisteredProduct[] | null> => {
    const product = await this.model.getAll();
    return product;
  };
}