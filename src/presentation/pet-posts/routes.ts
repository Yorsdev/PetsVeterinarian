import { Router } from 'express';
import { PetPostController } from './controller';
import { CreatorPetPostService } from './services/creator-pet-post.service';

export class PetPostRoutes {
  static get routes() {
    const router = Router();

    const creatorPetPostService = new CreatorPetPostService();
    const controller = new PetPostController(creatorPetPostService);

    router.post('/', controller.create);

    return router;
  }
}
