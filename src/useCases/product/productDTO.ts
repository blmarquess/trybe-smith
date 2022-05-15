export interface IProduct {
  name: string,
  amount: string,
}

export interface IRegisteredProduct extends IProduct {
  id: number,
  orderId: string | null
}
