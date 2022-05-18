import { IOrderRepository } from './repository/repository';

const findProducts = (id: number, data:IOrderRepository[]) => data
  .filter((order) => order.id === id)
  .map((i) => i.productsIds);

const orderFormateResponse = (data: IOrderRepository[]) => [...new Set(data
  .map((order) => ({ id: order.id, userId: order.userId })))]
  .map((item) => ({
    id: item.id,
    userId: item.userId,
    productsIds: findProducts(item.id, data),
  }));

export default orderFormateResponse;
