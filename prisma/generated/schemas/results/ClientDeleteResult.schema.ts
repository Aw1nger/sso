import * as z from 'zod';
export const ClientDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  secret: z.string(),
  redirectUri: z.array(z.string()),
  AuthCode: z.array(z.unknown()),
  Session: z.array(z.unknown())
}));