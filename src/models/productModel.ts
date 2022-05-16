import { RowDataPacket } from 'mysql2';
import { IRegisteredProduct, IProduct } from '../useCases/productCases/repository/product';
import connection from './connection';

export default class ProductModel {
  public getAll = async ():Promise <IRegisteredProduct[] | null> => {
    const [result] = await connection.execute(`
    SELECT * FROM Trybesmith.Products
    `);
    return result as IRegisteredProduct[];
  };

  public create = async (product: IProduct): Promise<RowDataPacket> => {
    const [result] = await connection.execute(`
      INSERT INTO Trybesmith.Products (name, amount)
      VALUES (?, ?)
      `, [product.name, product.amount]);
    return result as RowDataPacket;
  };
}
