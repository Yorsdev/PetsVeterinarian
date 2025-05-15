"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const creator_user_service_1 = require("./services/creator-user.service");
const login_user_service_1 = require("./services/login-user.service");
const finder_user_service_1 = require("./services/finder-user.service");
class UserRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const finderUserService = new finder_user_service_1.FinderUserService();
        const loginUserService = new login_user_service_1.LoginUserService();
        const creatorUserService = new creator_user_service_1.CreatorUserService();
        const controller = new controller_1.UserController(creatorUserService, loginUserService, finderUserService);
        router.get('/', controller.findAll);
        router.post('/register', controller.register);
        router.post('/login', controller.login);
        router.get('/:id', controller.findOne);
        return router;
    }
}
exports.UserRoutes = UserRoutes;
