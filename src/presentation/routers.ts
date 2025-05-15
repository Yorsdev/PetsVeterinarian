import { Router } from 'express';
import { UserRoutes } from './users/routes';

export class AppRoutes {
  static get routes() {
    const router = Router();

    router.use('/api/user', UserRoutes.routes);

    return router;
  }
}
