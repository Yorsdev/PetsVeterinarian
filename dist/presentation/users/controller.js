"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor(creatorUserService, loginUserService, finderUserService) {
        this.creatorUserService = creatorUserService;
        this.loginUserService = loginUserService;
        this.finderUserService = finderUserService;
        this.register = (req, res) => {
            this.creatorUserService
                .execute(req.body)
                .then((user) => res.status(201).json(user))
                .catch((error) => res.status(500).json({ message: 'Internal Server Error' }));
        };
        this.login = (req, res) => {
            this.loginUserService
                .execute()
                .then((data) => res.status(200).json(data))
                .catch((error) => res.status(500).json({ message: 'Internal Server Error' }));
        };
        this.findAll = (req, res) => {
            this.finderUserService
                .executeByFindAll()
                .then((data) => res.status(200).json(data))
                .catch((error) => res.status(500).json({ message: 'Internal Server Error' }));
        };
        this.findOne = (req, res) => {
            const { id } = req.params;
            this.finderUserService
                .executeByFindOne(id)
                .then((data) => res.status(200).json(data))
                .catch((error) => res.status(500).json({ message: 'Internal Server Error' }));
        };
    }
}
exports.UserController = UserController;
