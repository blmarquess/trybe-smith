import connection from '../../models/connection';
import ProductModel from '../../models/productModel';

export default class ProductService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAllProducts() {
    const data = await this.model.getAllProducts();
    return data;
  }
}