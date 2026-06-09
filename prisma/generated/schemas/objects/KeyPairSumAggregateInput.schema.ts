import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const KeyPairSumAggregateInputObjectSchema: z.ZodType<Prisma.KeyPairSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.KeyPairSumAggregateInputType>;
export const KeyPairSumAggregateInputObjectZodSchema = makeSchema();
