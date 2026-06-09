import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const FirstRegisterSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FirstRegisterSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FirstRegisterSumOrderByAggregateInput>;
export const FirstRegisterSumOrderByAggregateInputObjectZodSchema = makeSchema();
