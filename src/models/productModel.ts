import { IRegisteredProduct } from '../@types/product';
import connection from './connection';

export default class ProductModel {
  public getAll = async ():Promise <IRegisteredProduct[] | null> => {
    const [result] = await connection.execute(`
    SELECT * FROM Trybesmith.Products
    `);
    return result as IRegisteredProduct[];
  };
}
