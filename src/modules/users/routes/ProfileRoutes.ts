import { Router } from 'express';
import ProfileController from '../controllers/ProfileControllers';
import { UpdateUserSchema } from '../schemas/UpdateUserSchema';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.get('/', profileController.show);
profileRouter.patch('/', UpdateUserSchema, profileController.update);

export default profileRouter;
