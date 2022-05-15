import { Request, Response, NextFunction } from 'express';
import ProductService from './productService';

class ProductController {
  private service: ProductService;
  
  constructor() {
    this.service = new ProductService();
  }

  public async getAll(_req: Request, res: Response, next:NextFunction): Promise<Response | void> {
    try {
      const data = await this.service.getAllProducts();
      return res.status(201).json(data);
    } catch (e) {
      return next(e);
    }
  }
}

export default ProductController;
