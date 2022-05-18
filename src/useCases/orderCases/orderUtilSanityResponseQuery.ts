import { IOrderRepository } from './repository/repository';

const findProducts = (id: number, data:IOrderRepository[]) => data
  .filter((order) => order.id === id)
  .map((i) => i.productsIds);

const orderFormateResponse = (data: IOrderRepository[]) => [...new Set(data
  .map((order) => order.id))]
  .map((item) => ({
    id: item,
    userId: data.find(({ userId }) => userId === item)?.userId,
    productsIds: findProducts(item, data),
  }));

export default orderFormateResponse;
