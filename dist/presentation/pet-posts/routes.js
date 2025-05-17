"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetPostRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const creator_pet_post_service_1 = require("./services/creator-pet-post.service");
const finder_pet_post_service_1 = require("./services/finder-pet-post.service");
const approve_pet_post_service_1 = require("./services/approve-pet-post.service");
const reject_pet_post_service_1 = require("./services/reject-pet-post.service");
const updater_pet_post_service_1 = require("./services/updater-pet-post.service");
const delete_pet_post_service_1 = require("./services/delete-pet-post.service");
class PetPostRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const creatorPetPostService = new creator_pet_post_service_1.CreatorPetPostService();
        const finderPetPostService = new finder_pet_post_service_1.FinderPetPostService();
        const approvePetPostService = new approve_pet_post_service_1.ApprovePetPostService(finderPetPostService);
        const rejectPetPostService = new reject_pet_post_service_1.RejectPetPostService(finderPetPostService);
        const updaterPetPostService = new updater_pet_post_service_1.UpdaterPetPostService();
        const deleterPetPostService = new delete_pet_post_service_1.DeletePetPostService();
        const controller = new controller_1.PetPostController(creatorPetPostService, finderPetPostService, approvePetPostService, rejectPetPostService, updaterPetPostService, deleterPetPostService);
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
exports.PetPostRoutes = PetPostRoutes;
