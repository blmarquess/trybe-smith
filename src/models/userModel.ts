import { RowDataPacket } from 'mysql2';
import { IUserRepository } from '../useCases/userCases/repository/UserRepository';
import connection from './connection';

export default class UserModel {
  public create = async (userData: IUserRepository): Promise<RowDataPacket> => {
    const [result] = await connection.execute(`
      INSERT INTO Trybesmith.Users (username, classe, level, password)
      VALUES (?, ?, ?, ?)
      `, [userData.username, userData.classe, userData.level, userData.password]);
    return result as RowDataPacket;
  };
}
