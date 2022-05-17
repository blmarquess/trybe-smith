import { Request, Response, NextFunction } from 'express';
import CreateUserService from './createUserService';
import { IUserToken } from './repository/UserRepository';
import userSchema from './schemas/userSchemas';

export default class UserController {
  constructor(private service = new CreateUserService()) {}

  public createUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | IUserToken | undefined> => {
    const { username, classe, level, password } = req.body;
    try {
      const { error } = userSchema.validate({ username, classe, level, password });
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
      const user = await this.service.execute({ username, classe, level, password });
      return res.status(200).json(user);
    } catch (error) {
      next(error);
      return res.status(500).json({ error: ' error.message' });
    }
  };
}