import * as z from 'zod';
export const FirstRegisterGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  email: z.string(),
  username: z.string(),
  code: z.string(),
  expiresAt: z.date(),
  _count: z.object({
    id: z.number(),
    email: z.number(),
    username: z.number(),
    code: z.number(),
    expiresAt: z.number()
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
    code: z.string().nullable(),
    expiresAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    email: z.string().nullable(),
    username: z.string().nullable(),
    code: z.string().nullable(),
    expiresAt: z.date().nullable()
  }).nullable().optional()
}));