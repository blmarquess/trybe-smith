import { Request, Response, NextFunction } from 'express';
import CreateProductService from './createProductService';
import productSchemas from './schemas/productSchemas';

export default class CreateProductController {
  constructor(private register = new CreateProductService()) {}

  public execute = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, amount } = req.body;
      const { error } = productSchemas.validate({ name, amount });

      if (error?.message.includes('required')) {
        return res.status(400).json({ message: error.message });
      }
      if (error) {
        return res.status(422).json({ message: error.message });
      }

      const data = await this.register.create({ name, amount });
      return res.status(201).json(data);
    } catch (e) {
      next(e);
    }
  };
}
