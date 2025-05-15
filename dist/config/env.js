"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
require("dotenv/config");
const env_var_1 = require("env-var");
const encodedPassword = encodeURIComponent((0, env_var_1.get)('DATABASE_PASSWORD').required().asString());
exports.envs = {
    PORT: (0, env_var_1.get)('PORT').default(3000).required().asPortNumber(),
    NODE_ENV: (0, env_var_1.get)('NODE_ENV').default('development').asString(),
    DATABASE_USERNAME: (0, env_var_1.get)('DATABASE_USERNAME').required().asString(),
    DATABASE_PASSWORD: (0, env_var_1.get)('DATABASE_PASSWORD').required().asString(),
    DATABASE_HOST: (0, env_var_1.get)('DATABASE_HOST').required().asString(),
    DATABASE_PORT: (0, env_var_1.get)('DATABASE_PORT').default(5432).asPortNumber(),
    DATABASE_NAME: (0, env_var_1.get)('DATABASE_NAME').required().asString(),
    DATABASE_URL: `postgresql://${(0, env_var_1.get)('DATABASE_USERNAME')
        .required()
        .asString()}:${encodedPassword}@${(0, env_var_1.get)('DATABASE_HOST')
        .required()
        .asString()}:${(0, env_var_1.get)('DATABASE_PORT').default(5432).asPortNumber()}/${(0, env_var_1.get)('DATABASE_NAME')
        .required()
        .asString()}?sslmode=require`,
};
