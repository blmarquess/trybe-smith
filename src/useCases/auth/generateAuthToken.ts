import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUserToken, IUserTokenRepository } from '../userCases/repository/UserRepository';

dotenv.config();

const SECRET = process.env.JWT_SECRET || 'secret_key';

export default class GenerateAuthToken {
  constructor(private authSisteme = jwt) { }

  public execute = (user: IUserTokenRepository): IUserToken => {
    const { username, id } = user;

    const CONFIG_JWT = { expiresIn: '1d' };
    
    const token = this.authSisteme.sign({ username, id }, SECRET, CONFIG_JWT);

    return { token };
  };
}