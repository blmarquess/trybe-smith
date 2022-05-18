export interface IUserRepository{
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface IUserToken {
  token: string;
}

export interface IUserTokenRepository {
  username: string;
  id: number;
}