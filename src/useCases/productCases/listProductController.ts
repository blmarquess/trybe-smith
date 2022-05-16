import { Request, Response, NextFunction } from 'express';
import ListProduct from './listProduct';

export default class ListProductsController {
  constructor(private service = new ListProduct()) {}

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.getAll();
      return res.status(200).json(data);
    } catch (e) {
      next(e);
    }
  };
}
