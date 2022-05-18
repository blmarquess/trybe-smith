import { IOrderRepository } from './repository/repository';

const response = [
  {
    id: 1,
    userId: 1,
    productsIds: 2,
  },
  {
    id: 3,
    userId: 2,
    productsIds: 4,
  },
  {
    id: 3,
    userId: 2,
    productsIds: 7,
  },
  {
    id: 3,
    userId: 2,
    productsIds: 8,
  },
  {
    id: 2,
    userId: 3,
    productsIds: 3,
  },
  {
    id: 2,
    userId: 3,
    productsIds: 5,
  },
  {
    id: 2,
    userId: 3,
    productsIds: 6,
  },
];

const response2 = [...new Set(response.map((order) => order.id))];

const findProducts = (id: number) => response
  .filter((order) => order.id === id)
  .map((i) => i.productsIds);

const result = response2.map((item) => ({
  id: item,
  userId: response.find((order) => order?.userId === item)?.userId,
  productsIds: findProducts(item),
}));

console.log(result);

const orderFormateResponse = (data: IOrderRepository[]) => [...new Set(data
  .map((order) => order.id))]
  .map((item) => ({
    id: item,
    userId: response.find(({ userId }) => userId === item)?.userId,
    productsIds: findProducts(item),
  }));

export default orderFormateResponse;
