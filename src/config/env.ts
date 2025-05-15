import 'dotenv/config';

import { get } from 'env-var';

const encodedPassword = encodeURIComponent(
  get('DATABASE_PASSWORD').required().asString()
);
export const envs = {
  PORT: get('PORT').default(3000).required().asPortNumber(),
  NODE_ENV: get('NODE_ENV').default('development').asString(),

  DATABASE_USERNAME: get('DATABASE_USERNAME').required().asString(),
  DATABASE_PASSWORD: get('DATABASE_PASSWORD').required().asString(),
  DATABASE_HOST: get('DATABASE_HOST').required().asString(),
  DATABASE_PORT: get('DATABASE_PORT').default(5432).asPortNumber(),
  DATABASE_NAME: get('DATABASE_NAME').required().asString(),
  DATABASE_URL: `postgresql://${get('DATABASE_USERNAME')
    .required()
    .asString()}:${encodedPassword}@${get('DATABASE_HOST')
    .required()
    .asString()}:${get('DATABASE_PORT').default(5432).asPortNumber()}/${get(
    'DATABASE_NAME'
  )
    .required()
    .asString()}?sslmode=require`,
};
