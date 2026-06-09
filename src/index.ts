import openapi, { fromTypes } from '@elysia/openapi';
import { Elysia } from 'elysia';
import z from 'zod';
import { RegisterRoute as Register } from './routes/register';
import { rotateJWKS } from './lib/jwks';
import { rotateJWKSCron } from './utils/rotate-jwks-cron';
import { wellKnown } from './routes/well-known';
import { Auth } from './routes/auth';

const app = new Elysia({ prefix: '/api' })
  .onStart(async () => {
    await rotateJWKS();
  })
  .use(rotateJWKSCron)
  .use(
    openapi({
      references: fromTypes(Bun.env.NODE_ENV === 'production' ? 'dist/index.d.ts' : 'src/index.ts'),
      mapJsonSchema: {
        zod: z.toJSONSchema,
      },
      documentation: {
        tags: [{ name: 'register', description: 'Operations related to registration' }],
        components: {
          securitySchemes: {
            cookieAuth: {
              type: 'apiKey',
              in: 'cookie',
              name: '__Host-gtw-access-token',
            },
          },
        },
      },
    }),
  )
  .use(wellKnown)
  .use(Auth)
  .use(Register)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}\n`,
  `OpenAPI documentation is running at http://${app.server?.hostname}:${app.server?.port}/api/openapi`,
);
