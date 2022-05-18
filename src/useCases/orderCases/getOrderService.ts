import OrdersModel from '../../models/ordersModel';

export default class GetOrderService {
  public repository = new OrdersModel();

  public async execute(id: number) {
    const order = await this.repository.getAllByUserId(id);

    if (!order) {
      throw new Error('Order not found');
    }

    return order;
  }
}