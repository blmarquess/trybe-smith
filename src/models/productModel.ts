import DBClient from './connection';

class ProductModel {
  static async getAllProducts() {
    const query = 'SELECT * FROM Products';
    const rows = await DBClient.execute(query);
    return rows;
  }
}

export default ProductModel;
