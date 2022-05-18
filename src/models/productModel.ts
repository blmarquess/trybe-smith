import { RowDataPacket } from 'mysql2';
import { IRegisteredProduct, IProduct } from '../useCases/productCases/repository/product';
import connection from './connection';

export default class ProductModel {
  constructor(private queryExecute = connection) { }

  public async getAll():Promise <IRegisteredProduct[] | null> {
    const [result] = await this.queryExecute.execute(`
    SELECT * FROM Trybesmith.Products
    `);
    return result as IRegisteredProduct[];
  }

  public async create(product: IProduct): Promise<RowDataPacket> {
    const [result] = await this.queryExecute.execute(`
      INSERT INTO Trybesmith.Products (name, amount)
      VALUES (?, ?)
      `, [product.name, product.amount]);
    return result as RowDataPacket;
  }
}
