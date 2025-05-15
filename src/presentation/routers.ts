import { Router } from 'express';
import { UserRoutes } from './users/routes';
import { PetPostRoutes } from './pet-posts/routes';

export class AppRoutes {
  static get routes() {
    const router = Router();

    router.use('/api/user', UserRoutes.routes);
    router.use('/api/pet-post', PetPostRoutes.routes);

    return router;
  }
}
