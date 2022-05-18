import connection from './connection';

const QUERY = `SELECT 
    Orders.id AS id,
    Orders.userId AS userId,
    Products.id AS productsIds
FROM
    Trybesmith.Users AS Users
        JOIN
    Trybesmith.Orders AS Orders ON Users.id = Orders.userId
        JOIN
    Trybesmith.Products AS Products ON Orders.id = Products.orderId
    ORDER BY Orders.userId ASC;`;

export default class OrdersModel {
  constructor(private queryExecute = connection) { }

  public getAllOrders = async () => {
    const [result] = await this.queryExecute.execute(QUERY);
    return result;
  };
}