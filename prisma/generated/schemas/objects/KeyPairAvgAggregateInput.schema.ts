import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const KeyPairAvgAggregateInputObjectSchema: z.ZodType<Prisma.KeyPairAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.KeyPairAvgAggregateInputType>;
export const KeyPairAvgAggregateInputObjectZodSchema = makeSchema();
