import * as z from 'zod';
export const KeyPairAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    publicKey: z.number(),
    privateKey: z.number(),
    createdAt: z.number(),
    alghoritm: z.number(),
    status: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    publicKey: z.string().nullable(),
    privateKey: z.string().nullable(),
    createdAt: z.date().nullable(),
    alghoritm: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    publicKey: z.string().nullable(),
    privateKey: z.string().nullable(),
    createdAt: z.date().nullable(),
    alghoritm: z.string().nullable()
  }).nullable().optional()});