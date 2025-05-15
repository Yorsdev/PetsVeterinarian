import { Router } from 'express';
import { PetPostController } from './controller';
import { CreatorPetPostService } from './services/creator-pet-post.service';
import { FinderPetPostService } from './services/finder-pet-post.service';
import { ApprovePetPostService } from './services/approve-pet-post.service';
import { RejectPetPostService } from './services/reject-pet-post.service';
import { UpdaterPetPostService } from './services/updater-pet-post.service';
import { DeletePetPostService } from './services/delete-pet-post.service';

export class PetPostRoutes {
  static get routes() {
    const router = Router();

    const creatorPetPostService = new CreatorPetPostService();
    const finderPetPostService = new FinderPetPostService();
    const approvePetPostService = new ApprovePetPostService(
      finderPetPostService
    );
    const rejectPetPostService = new RejectPetPostService(finderPetPostService);
    const updaterPetPostService = new UpdaterPetPostService();
    const deleterPetPostService = new DeletePetPostService();

    const controller = new PetPostController(
      creatorPetPostService,
      finderPetPostService,
      approvePetPostService,
      rejectPetPostService,
      updaterPetPostService,
      deleterPetPostService
    );

    router.post('/', controller.create);
    router.get('/', controller.findAll);
    router.get('/:id', controller.findOne);
    router.patch('/:id/approve', controller.approve);
    router.patch('/:id/reject', controller.reject);
    router.patch('/:id/', controller.updateOne);
    router.delete('/:id/', controller.deleteOne);

    return router;
  }
}
