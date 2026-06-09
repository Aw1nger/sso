import * as z from 'zod';
export const AuthCodeGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  code: z.string(),
  userId: z.number().int(),
  createdAt: z.date(),
  clientId: z.number().int(),
  _count: z.object({
    id: z.number(),
    code: z.number(),
    userId: z.number(),
    createdAt: z.number(),
    clientId: z.number(),
    user: z.number(),
    client: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    userId: z.number().nullable(),
    clientId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    userId: z.number().nullable(),
    clientId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    code: z.string().nullable(),
    userId: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    clientId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    code: z.string().nullable(),
    userId: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    clientId: z.number().int().nullable()
  }).nullable().optional()
}));