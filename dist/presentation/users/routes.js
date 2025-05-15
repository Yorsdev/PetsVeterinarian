"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const creator_user_service_1 = require("./services/creator-user.service");
const login_user_service_1 = require("./services/login-user.service");
const finder_user_service_1 = require("./services/finder-user.service");
const updater_user_service_1 = require("./services/updater-user.service");
const delete_user_service_1 = require("./services/delete-user.service");
class UserRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const finderUserService = new finder_user_service_1.FinderUserService();
        const loginUserService = new login_user_service_1.LoginUserService();
        const creatorUserService = new creator_user_service_1.CreatorUserService();
        const updaterUserService = new updater_user_service_1.UpdaterUserService();
        const deleterUserService = new delete_user_service_1.DeleterUserService();
        const controller = new controller_1.UserController(creatorUserService, loginUserService, finderUserService, updaterUserService, deleterUserService);
        router.get('/', controller.findAll);
        router.post('/register', controller.register);
        router.post('/login', controller.login);
        router.get('/:id', controller.findOne);
        router.patch('/:id', controller.updateOne);
        router.delete('/:id', controller.deleteOne);
        /* FALTA CREAR PATCH DE ID Y DELETE DE ID */
        return router;
    }
}
exports.UserRoutes = UserRoutes;
