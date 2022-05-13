import express from 'express';

class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middleware();
    this.router();
  }

  private middleware(): void {
    this.server.use(express.json());
  }

  public router() {
    this.server.use();
  }
}

export default { App };
