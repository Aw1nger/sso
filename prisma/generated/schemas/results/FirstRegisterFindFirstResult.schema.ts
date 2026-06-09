import * as z from 'zod';
export const FirstRegisterFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  email: z.string(),
  username: z.string(),
  code: z.string(),
  expiresAt: z.date()
}));