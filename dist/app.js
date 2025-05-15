"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const data_1 = require("./data");
const env_1 = require("./config/env");
const routers_1 = require("./presentation/routers");
const server_1 = require("./presentation/server");
// import { CLIENT_RENEG_LIMIT } from 'tls';
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log('🔍 Verificando variables de entorno:');
        // console.log({
        //   username: envs.DATABASE_USERNAME,
        //   password: envs.DATABASE_PASSWORD,
        //   host: envs.DATABASE_HOST,
        //   port: envs.DATABASE_PORT,
        //   database: envs.DATABASE_NAME,
        // });
        const postgres = new data_1.PostgresDatabase({
            username: env_1.envs.DATABASE_USERNAME,
            password: env_1.envs.DATABASE_PASSWORD,
            host: env_1.envs.DATABASE_HOST,
            port: Number(env_1.envs.DATABASE_PORT),
            database: env_1.envs.DATABASE_NAME,
        });
        yield postgres.connect();
        const server = new server_1.Server({
            port: Number(env_1.envs.PORT),
            routes: routers_1.AppRoutes.routes,
        });
        yield server.start();
    });
}
main();
