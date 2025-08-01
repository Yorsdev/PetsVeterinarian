import 'reflect-metadata';
import { PostgresDatabase } from './data';
import { envs } from './config/env';
import { AppRoutes } from './presentation/routers';
import { Server } from './presentation/server';

// import { CLIENT_RENEG_LIMIT } from 'tls';

async function main() {
  // console.log('🔍 Verificando variables de entorno:');
  // console.log({
  //   username: envs.DATABASE_USERNAME,
  //   password: envs.DATABASE_PASSWORD,
  //   host: envs.DATABASE_HOST,
  //   port: envs.DATABASE_PORT,
  //   database: envs.DATABASE_NAME,
  // });

  const postgres = new PostgresDatabase({
    username: envs.DATABASE_USERNAME,
    password: envs.DATABASE_PASSWORD,
    host: envs.DATABASE_HOST,
    port: Number(envs.DATABASE_PORT),
    database: envs.DATABASE_NAME,
  });

  await postgres.connect();

  const server = new Server({
    port: Number(envs.PORT),
    routes: AppRoutes.routes,
  });

  await server.start();
}

main();
