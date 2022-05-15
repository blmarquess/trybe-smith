import express from 'express';
import router from './routers/router';

const app = express();

app.use(express.json());
app.use('/', router);

export default app;
