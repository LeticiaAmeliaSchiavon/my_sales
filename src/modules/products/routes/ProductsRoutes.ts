import { Router } from 'express';
import ProductsControllers from '../controllers/ProductsControllers';
import {
  createProductSchema,
  idParamsValidation,
  updateProductSchema,
} from '../schemas/ProductSchemas';

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
  idParamsValidation,
  asyncHandler(productsController.show.bind(productsController)),
);
productsRouter.post(
  '/',
  createProductSchema,
  asyncHandler(productsController.create.bind(productsController)),
);
productsRouter.put(
  '/:id',
  updateProductSchema,
  asyncHandler(productsController.update.bind(productsController)),
);
productsRouter.delete(
  '/:id',
  idParamsValidation,
  asyncHandler(productsController.delete.bind(productsController)),
);

export default productsRouter;
