import { Request, Response } from 'express';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

export default class UpdateAvatarControllers {
  async update(request: Request, responde: Response): Promise<Response> {
    const updateUserAvatar = new UpdateUserAvatarService();

    const user = await updateUserAvatar.execute({
      userId: Number(request.user.id),
      avatarFileName: request.file?.filename as string,
    });

    return responde.json(user);
  }
}
