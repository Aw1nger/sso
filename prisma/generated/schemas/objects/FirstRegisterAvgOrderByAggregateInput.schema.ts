import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const FirstRegisterAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FirstRegisterAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FirstRegisterAvgOrderByAggregateInput>;
export const FirstRegisterAvgOrderByAggregateInputObjectZodSchema = makeSchema();
