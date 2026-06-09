import * as z from 'zod';
export const ClientAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    secret: z.number(),
    redirectUri: z.number(),
    AuthCode: z.number(),
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
    name: z.string().nullable(),
    secret: z.string().nullable(),
    redirectUri: z.array(z.string()).nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    secret: z.string().nullable(),
    redirectUri: z.array(z.string()).nullable()
  }).nullable().optional()});