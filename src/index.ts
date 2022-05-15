import App from './config/server';

const PORT = 3000;

new App().server.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));
