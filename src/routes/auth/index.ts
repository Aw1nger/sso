import Elysia from 'elysia';
import { RefreshRoute } from './refresh';

export const Auth = new Elysia({ tags: ['auth'] }).group('/auth', (app) => app.use(RefreshRoute));
