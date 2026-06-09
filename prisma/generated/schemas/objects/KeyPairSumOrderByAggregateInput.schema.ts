import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const KeyPairSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.KeyPairSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.KeyPairSumOrderByAggregateInput>;
export const KeyPairSumOrderByAggregateInputObjectZodSchema = makeSchema();
