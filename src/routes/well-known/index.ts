import Elysia from 'elysia';
import { JWKSRoute } from './jwks';

export const wellKnown = new Elysia({ tags: ['well-known'] }).group('/.well-known', (app) =>
  app.use(JWKSRoute),
);
