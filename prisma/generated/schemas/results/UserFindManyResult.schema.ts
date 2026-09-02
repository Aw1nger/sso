import * as z from 'zod';
export const UserFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});