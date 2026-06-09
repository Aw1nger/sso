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
export const FirstRegisterCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FirstRegisterCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FirstRegisterCountOrderByAggregateInput>;
export const FirstRegisterCountOrderByAggregateInputObjectZodSchema = makeSchema();
