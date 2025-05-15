import { Router } from 'express';
import { UserController } from './controller';
import { CreatorUserService } from './services/creator-user.service';
import { LoginUserService } from './services/login-user.service';
import { FinderUserService } from './services/finder-user.service';
import { UpdaterUserService } from './services/updater-user.service';
import { DeleterUserService } from './services/delete-user.service';

export class UserRoutes {
  static get routes(): Router {
    const router = Router();
    const finderUserService = new FinderUserService();
    const loginUserService = new LoginUserService();
    const creatorUserService = new CreatorUserService();
    const updaterUserService = new UpdaterUserService();
    const deleterUserService = new DeleterUserService();

    const controller = new UserController(
      creatorUserService,
      loginUserService,
      finderUserService,
      updaterUserService,
      deleterUserService
    );

    router.get('/', controller.findAll);
    router.post('/register', controller.register);
    router.post('/login', controller.login);
    router.get('/:id', controller.findOne);
    router.patch('/:id', controller.updateOne);
    router.delete('/:id', controller.deleteOne);
    /* FALTA CREAR PATCH DE ID Y DELETE DE ID */
    return router;
  }
}
