import { Request, Response } from 'express';
import { CreatorPetPostService } from './services/creator-pet-post.service';
import { FinderPetPostService } from './services/finder-pet-post.service';
import { ApprovePetPostService } from './services/approve-pet-post.service';
import { RejectPetPostService } from './services/reject-pet-post.service';
import { UpdaterPetPostService } from './services/updater-pet-post.service';
import { DeletePetPostService } from './services/delete-pet-post.service';

export class PetPostController {
  constructor(
    private readonly creatorPetPostService: CreatorPetPostService,
    private readonly finderPetPostService: FinderPetPostService,
    private readonly approvePetPostService: ApprovePetPostService,
    private readonly rejectPetPostService: RejectPetPostService,
    private readonly updaterPetPostService: UpdaterPetPostService,
    private readonly deleterPetPostService: DeletePetPostService
  ) {}

  create = (req: Request, res: Response) => {
    this.creatorPetPostService
      .execute(req.body)
      .then((petPost) => res.status(201).json(petPost))
      .catch((error) =>
        res.status(500).json({ message: 'Internal Server Error' })
      );
  };

  findAll = (req: Request, res: Response) => {
    this.finderPetPostService
      .executeByFindAll()
      .then((petPost) => res.status(200).json(petPost))
      .catch((error) =>
        res.status(500).json({ message: 'Internal Server Error' })
      );
  };

  findOne = (req: Request, res: Response) => {
    const { id } = req.params;
    this.finderPetPostService
      .executeByFindOne(id)
      .then((petPost) => res.status(200).json(petPost))
      .catch((error) =>
        res.status(500).json({ message: 'Internal Server Error' })
      );
  };

  approve = (req: Request, res: Response) => {
    const { id } = req.params;
    this.approvePetPostService
      .execute(id)
      .then((petPost) => res.status(200).json(petPost))
      .catch((error) =>
        res.status(500).json({ message: 'Internal Server Error' })
      );
  };

  reject = (req: Request, res: Response) => {
    const { id } = req.params;
    this.rejectPetPostService
      .execute(id)
      .then((petPost) => res.status(200).json(petPost))
      .catch((error) => res.status(400).json({ message: error.message }));
  };

  updateOne = (req: Request, res: Response) => {
    const { id } = req.params;
    this.updaterPetPostService
      .execute(id, req.body)
      .then((petPost) => res.status(200).json(petPost))
      .catch((error) =>
        res.status(500).json({ message: 'Internal Server Error' })
      );
  };

  deleteOne = (req: Request, res: Response) => {
    const { id } = req.params;

    this.deleterPetPostService
      .execute(id)
      .then(() => res.status(204).send())
      .catch((error) =>
        res.status(500).json({ message: 'Internal Server Error' })
      );
  };
}
