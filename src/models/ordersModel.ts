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
WHERE
    Orders.userId = ?
GROUP BY Products.id;`;

export default class OrdersModel {
  public getAllByUserId = async (userId: number) => {
    const [result] = await connection.execute(QUERY, [userId]);
    return result;
  };
}