import UserModel from '../../models/userModel';
import GenerateAuthToken from '../auth/generateAuthToken';
import { IUserRepository, IUserToken } from './repository/UserRepository';

export default class CreateUserService {
  public repository = new UserModel();

  public genToken = new GenerateAuthToken();

  public async execute(request: IUserRepository): Promise<IUserToken> {
    const user = await this.repository.create(request);

    const newToken = this.genToken.execute({ username: request.username, id: user.insertId });
    return newToken;
  }
}