"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetPostRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const creator_pet_post_service_1 = require("./services/creator-pet-post.service");
class PetPostRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const creatorPetPostService = new creator_pet_post_service_1.CreatorPetPostService();
        const controller = new controller_1.PetPostController(creatorPetPostService);
        router.post('/', controller.create);
        return router;
    }
}
exports.PetPostRoutes = PetPostRoutes;
