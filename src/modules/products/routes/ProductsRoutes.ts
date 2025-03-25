import { Router } from 'express';
import ProductsControllers from '../controllers/ProductsControllers';

const productsRouter = Router();
const productsController = new ProductsControllers();

// Middleware para capturar e tratar erros automaticamente
const asyncHandler = (fn: any) => (req: any, res: any, next: any) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

productsRouter.get(
  '/',
  asyncHandler(productsController.index.bind(productsController)),
);
productsRouter.get(
  '/:id',
  asyncHandler(productsController.show.bind(productsController)),
);
productsRouter.post(
  '/',
  asyncHandler(productsController.create.bind(productsController)),
);
productsRouter.put(
  '/:id',
  asyncHandler(productsController.update.bind(productsController)),
);
productsRouter.delete(
  '/:id',
  asyncHandler(productsController.delete.bind(productsController)),
);

export default productsRouter;
