import * as z from 'zod';
export const UserCreateResultSchema = z.object({
  id: z.number().int(),
  email: z.string(),
  username: z.string(),
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  avatar: z.string().optional(),
  accountStatus: z.unknown(),
  role: z.unknown(),
  AuthCodes: z.array(z.unknown()),
  Session: z.array(z.unknown())
});