import { Pool } from 'mysql2/promise';
import { IRegisteredProduct } from '../useCases/product/productDTO';

export default class ProductModel {
  constructor(private connection: Pool) {}

  public async getAllProducts():Promise <IRegisteredProduct[] | null> {
    const [result] = await this.connection.execute(`
    SELECT * FROM Products
    `);
    return result as IRegisteredProduct[];
  }
}
