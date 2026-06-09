import * as z from 'zod';
export const ClientUpsertResultSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  secret: z.string(),
  redirectUri: z.array(z.string()),
  AuthCode: z.array(z.unknown()),
  Session: z.array(z.unknown())
});