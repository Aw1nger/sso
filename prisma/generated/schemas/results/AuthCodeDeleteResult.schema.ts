import * as z from 'zod';
export const AuthCodeDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  code: z.string(),
  userId: z.number().int(),
  createdAt: z.date(),
  clientId: z.number().int(),
  user: z.unknown(),
  client: z.unknown()
}));