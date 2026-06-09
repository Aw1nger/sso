import Elysia from 'elysia';
import { SendOTPRoute } from './send-otp';
import { VerifyOTPRoute } from './verify-otp';

export const RegisterRoute = new Elysia({ tags: ['register'] }).group('/reg', (app) =>
  app.use(SendOTPRoute).use(VerifyOTPRoute),
);
