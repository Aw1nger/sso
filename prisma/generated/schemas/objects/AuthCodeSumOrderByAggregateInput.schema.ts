import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional()
}).strict();
export const AuthCodeSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AuthCodeSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeSumOrderByAggregateInput>;
export const AuthCodeSumOrderByAggregateInputObjectZodSchema = makeSchema();
