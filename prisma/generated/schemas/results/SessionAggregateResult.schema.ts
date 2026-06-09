import * as z from 'zod';
export const SessionAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    token: z.number(),
    userId: z.number(),
    clientId: z.number(),
    revoked: z.number(),
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
    token: z.string().nullable(),
    userId: z.number().int().nullable(),
    clientId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    token: z.string().nullable(),
    userId: z.number().int().nullable(),
    clientId: z.number().int().nullable()
  }).nullable().optional()});