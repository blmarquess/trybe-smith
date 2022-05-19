import OrdersModel from '../../models/ordersModel';

export default class GetOrderService {
  public orderModel = new OrdersModel();

  public async execute() {
    const order = await this.orderModel.getAllOrders();
    console.log(order);
    return order;
  }
}