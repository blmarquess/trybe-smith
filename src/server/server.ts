import express from 'express';
import router from '../routers/router';

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
    this.server.use(router);
  }
}

export default App;
