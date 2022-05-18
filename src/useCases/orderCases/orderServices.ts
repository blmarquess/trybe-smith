import OrdersModel from '../../models/ordersModel';
import orderFormateResponse from './orderUtilSanityResponseQuery';
import { IOrderRepository } from './repository/repository';

export default class GetOrderService {
  public orderModel = new OrdersModel();

  public async execute() {
    const order = await this.orderModel.getAllOrders();
    const orderFormat = orderFormateResponse(order as IOrderRepository[]);
    return orderFormat;
  }
}