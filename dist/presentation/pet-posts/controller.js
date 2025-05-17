"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetPostController = void 0;
class PetPostController {
    constructor(creatorPetPostService, finderPetPostService, approvePetPostService, rejectPetPostService, updaterPetPostService, deleterPetPostService) {
        this.creatorPetPostService = creatorPetPostService;
        this.finderPetPostService = finderPetPostService;
        this.approvePetPostService = approvePetPostService;
        this.rejectPetPostService = rejectPetPostService;
        this.updaterPetPostService = updaterPetPostService;
        this.deleterPetPostService = deleterPetPostService;
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
                .catch((error) => res.status(400).json({ message: error.message }));
        };
        this.updateOne = (req, res) => {
            const { id } = req.params;
            this.updaterPetPostService
                .execute(id, req.body)
                .then((petPost) => res.status(200).json(petPost))
                .catch((error) => res.status(500).json({ message: 'Internal Server Error' }));
        };
        this.deleteOne = (req, res) => {
            const { id } = req.params;
            this.deleterPetPostService
                .execute(id)
                .then(() => res.status(204).send())
                .catch((error) => res.status(500).json({ message: 'Internal Server Error' }));
        };
    }
}
exports.PetPostController = PetPostController;
