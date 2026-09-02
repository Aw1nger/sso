import * as z from 'zod';
export const UserGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  email: z.string(),
  username: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  avatar: z.string(),
  _count: z.object({
    id: z.number(),
    email: z.number(),
    username: z.number(),
    firstname: z.number(),
    lastname: z.number(),
    avatar: z.number(),
    accountStatus: z.number(),
    role: z.number(),
    AuthCodes: z.number(),
    Session: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    email: z.string().nullable(),
    username: z.string().nullable(),
    firstname: z.string().nullable(),
    lastname: z.string().nullable(),
    avatar: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    email: z.string().nullable(),
    username: z.string().nullable(),
    firstname: z.string().nullable(),
    lastname: z.string().nullable(),
    avatar: z.string().nullable()
  }).nullable().optional()
}));