import { Request, Response, NextFunction } from 'express';
import GetOrderService from './getOrderService';

export default class OrderController {
  constructor(private getOrderService = new GetOrderService()) { }
  
  public async getOrder(req: Request, response: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const userID = parseInt(id, 10);
      if (Number.isNaN(userID)) {
        return response.status(400).json({ message: 'Invalid user id' });
      }
      const order = await this.getOrderService.execute(userID);
      return response.status(200).json(order);
    } catch (error) {
      next(error);
      return response.status(500).json({ error: ' error.message' });
    }
  }
}