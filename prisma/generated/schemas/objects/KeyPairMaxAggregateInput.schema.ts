import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  publicKey: z.literal(true).optional(),
  privateKey: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  alghoritm: z.literal(true).optional(),
  status: z.literal(true).optional()
}).strict();
export const KeyPairMaxAggregateInputObjectSchema: z.ZodType<Prisma.KeyPairMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.KeyPairMaxAggregateInputType>;
export const KeyPairMaxAggregateInputObjectZodSchema = makeSchema();
