import UserModel from '../../models/userModel';
import { IUserRepository } from './repository/UserRepository';

export default class CreateUserService {
  public repository = new UserModel();

  public async execute(request: IUserRepository): Promise<Response> {
    const user = await this.repository.create(request);
    return user as Response;
  }
}