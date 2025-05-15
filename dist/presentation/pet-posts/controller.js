"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetPostController = void 0;
class PetPostController {
    constructor(creatorPetPostService) {
        this.creatorPetPostService = creatorPetPostService;
        this.create = (req, res) => {
            this.creatorPetPostService
                .execute(req.body)
                .then((petPost) => res.status(201).json(petPost))
                .catch((error) => res.status(500).json({ message: 'Internal Server Error' }));
        };
    }
}
exports.PetPostController = PetPostController;
