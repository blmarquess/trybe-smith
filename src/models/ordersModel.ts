import connection from './connection';

const QUERY = `
    SELECT 
      Orders.id,
      Orders.userId,
      JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.Orders
      INNER JOIN Trybesmith.Products AS p
      ON FIND_IN_SET(Orders.id, p.orderId)
    GROUP BY Orders.id
    ORDER BY Orders.userId ASC`;

export default class OrdersModel {
  constructor(private queryExecute = connection) { }

  public getAllOrders = async () => {
    const [result] = await this.queryExecute.execute(QUERY);
    return result;
  };
}