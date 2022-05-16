import { Request, Response, NextFunction } from 'express';
import ProductService from '../services/productService';

export default class ProductsController {
  constructor(private service = new ProductService()) {}

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.getAll();
      return res.status(200).json(data);
    } catch (e) {
      next(e);
    }
  };
}
