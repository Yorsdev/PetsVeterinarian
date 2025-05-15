import { Request, Response } from 'express';
import { CreatorPetPostService } from './services/creator-pet-post.service';

export class PetPostController {
  constructor(private readonly creatorPetPostService: CreatorPetPostService) {}

  create = (req: Request, res: Response) => {
    this.creatorPetPostService
      .execute(req.body)
      .then((petPost) => res.status(201).json(petPost))
      .catch((error) =>
        res.status(500).json({ message: 'Internal Server Error' })
      );
  };
}
