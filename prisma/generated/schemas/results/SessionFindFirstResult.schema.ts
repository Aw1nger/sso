import * as z from 'zod';
export const SessionFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  token: z.string(),
  userId: z.number().int(),
  clientId: z.number().int(),
  revoked: z.boolean(),
  user: z.unknown(),
  client: z.unknown()
}));