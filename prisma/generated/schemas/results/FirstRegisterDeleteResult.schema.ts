import * as z from 'zod';
export const FirstRegisterDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  email: z.string(),
  username: z.string(),
  code: z.string(),
  expiresAt: z.date()
}));