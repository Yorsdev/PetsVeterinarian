import { Request, Response } from 'express';
import { CreatorUserService } from './services/creator-user.service';
import { LoginUserService } from './services/login-user.service';
import { FinderUserService } from './services/finder-user.service';
import { UpdaterUserService } from './services/updater-user.service';
import { DeleterUserService } from './services/delete-user.service';

export class UserController {
  constructor(
    private readonly creatorUserService: CreatorUserService,
    private readonly loginUserService: LoginUserService,
    private readonly finderUserService: FinderUserService,
    private readonly updaterUserService: UpdaterUserService,
    private readonly deleterUserService: DeleterUserService
  ) {}

  register = (req: Request, res: Response) => {
    this.creatorUserService
      .execute(req.body)
      .then((user) => res.status(201).json(user))
      .catch((error) =>
        res.status(500).json({ message: 'Internal Server Error' })
      );
  };

  login = (req: Request, res: Response) => {
    this.loginUserService
      .execute()
      .then((data) => res.status(200).json(data))
      .catch((error) =>
        res.status(500).json({ message: 'Internal Server Error' })
      );
  };

  findAll = (req: Request, res: Response) => {
    this.finderUserService
      .executeByFindAll()
      .then((data) => res.status(200).json(data))
      .catch((error) =>
        res.status(500).json({ message: 'Internal Server Error' })
      );
  };

  findOne = (req: Request, res: Response) => {
    const { id } = req.params;

    this.finderUserService
      .executeByFindOne(id)
      .then((data) => res.status(200).json(data))
      .catch((error) =>
        res.status(500).json({ message: 'Internal Server Error' })
      );
  };

  updateOne = (req: Request, res: Response) => {
    const { id } = req.params;

    this.updaterUserService
      .execute(id, req.body)
      .then((user) => res.status(200).json(user))
      .catch((error) =>
        res.status(500).json({ message: 'Internal Server Error' })
      );
  };

  deleteOne = (req: Request, res: Response) => {
    const { id } = req.params;

    this.deleterUserService
      .execute(id)
      .then(() => res.status(204).send())
      .catch((error) =>
        res.status(500).json({ message: 'Internal Server Error' })
      );
  };
}
