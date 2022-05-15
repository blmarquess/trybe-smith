import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

class Connection {
  private static instance: Connection;

  private connection: mysql.Pool;

  private constructor() {
    this.connection = mysql.createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: 'Trybesmith',
    });
  }

  public static getInstance(): Connection {
    if (!Connection.instance) {
      Connection.instance = new Connection();
    }

    return Connection.instance;
  }

  public async execute(query: string, params: string[] = []) {
    const [rows] = await this.connection.execute(query, params);
    return rows;
  }
}

const DBClient = Connection.getInstance();

export default DBClient;
