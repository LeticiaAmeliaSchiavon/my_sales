import productsRouter from '@modules/products/routes/ProductsRoutes';
import usersRouter from '@modules/users/routes/UserRoutes';
import { response, Router } from 'express';

const routes = Router();

routes.get('/health', (request, respose) => {
  return response.json({ message: 'Hello Dev, I am Alive!' });
});
routes.use('/products', productsRouter);
routes.use('/users', usersRouter);

export default routes;
