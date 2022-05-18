import { Request, Response, NextFunction } from 'express';
import GetOrderService from './orderServices';

export default class OrderController {
  constructor(private service = new GetOrderService()) {}
  
  public getOrder = async (_req: Request, response: Response, next: NextFunction) => {
    try {
      const order = await this.service.execute();
      return response.status(200).json(order);
    } catch (error) {
      next(error);
      return response.status(550).json(error);
    }
  };
}