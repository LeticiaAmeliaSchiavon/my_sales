import { Router } from 'express';
import ForgotPasswordController from '../controllers/ForgotPasswordControllers';
import ResetPasswordControllet from '../controllers/ResetPasswordControllers';
import {
  ForgotPasswordSchema,
  ResetPasswordSchema,
} from '../schemas/PasswordSchemas';

const passwordRouter = Router();
const forgotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordControllet();

passwordRouter.post(
  '/forgot',
  ForgotPasswordSchema,
  forgotPasswordController.create,
);

passwordRouter.post(
  '/reset',
  ResetPasswordSchema,
  resetPasswordController.create,
);

export default passwordRouter;
