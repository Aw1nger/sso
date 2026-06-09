import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional()
}).strict();
export const FirstRegisterMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FirstRegisterMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FirstRegisterMaxOrderByAggregateInput>;
export const FirstRegisterMaxOrderByAggregateInputObjectZodSchema = makeSchema();
