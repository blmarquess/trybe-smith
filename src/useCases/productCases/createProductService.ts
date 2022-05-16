import { IProduct, IRegisteredProduct } from './repository/product';
import ProductModel from '../../models/productModel';

export default class CreateProductService {
  public model = new ProductModel();

  public async create(product: IProduct): Promise<IRegisteredProduct> {
    const { insertId } = await this.model.create(product);
    const newProduct = {
      ...product,
      id: (insertId as number),
      orderId: null,
    };
    return newProduct;
  }
}