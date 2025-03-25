import productsRouter from '@modules/products/routes/ProductsRoutes';
import express from 'express';

const routes = express.Router();

routes.get('/health', (req, res) => {
  res.json({ message: 'Hello Dev, I am Alive!' });
});
routes.use('/products', productsRouter);

export default routes;
