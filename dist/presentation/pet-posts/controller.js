"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetPostController = void 0;
class PetPostController {
    constructor(creatorPetPostService, finderPetPostService, approvePetPostService, rejectPetPostService) {
        this.creatorPetPostService = creatorPetPostService;
        this.finderPetPostService = finderPetPostService;
        this.approvePetPostService = approvePetPostService;
        this.rejectPetPostService = rejectPetPostService;
        this.create = (req, res) => {
            this.creatorPetPostService
                .execute(req.body)
                .then((petPost) => res.status(201).json(petPost))
                .catch((error) => res.status(500).json({ message: 'Internal Server Error' }));
        };
        this.findAll = (req, res) => {
            this.finderPetPostService
                .executeByFindAll()
                .then((petPost) => res.status(200).json(petPost))
                .catch((error) => res.status(500).json({ message: 'Internal Server Error' }));
        };
        this.findOne = (req, res) => {
            const { id } = req.params;
            this.finderPetPostService
                .executeByFindOne(id)
                .then((petPost) => res.status(200).json(petPost))
                .catch((error) => res.status(500).json({ message: 'Internal Server Error' }));
        };
        this.approve = (req, res) => {
            const { id } = req.params;
            this.approvePetPostService
                .execute(id)
                .then((petPost) => res.status(200).json(petPost))
                .catch((error) => res.status(500).json({ message: 'Internal Server Error' }));
        };
        this.reject = (req, res) => {
            const { id } = req.params;
            this.rejectPetPostService
                .execute(id)
                .then((petPost) => res.status(200).json(petPost))
                .catch((error) => res.status(500).json({ message: 'Internal Server Error' }));
        };
    }
}
exports.PetPostController = PetPostController;
