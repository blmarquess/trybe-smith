import { Request, Response } from 'express';
import ProductModel from '../../models/productModel';

class ProductController {
  public async getAll(_req: Request, res: Response) {
    const result = await ProductModel.getAllProducts();
    return res.status(200).json(result);
  }
}

export default ProductController;
