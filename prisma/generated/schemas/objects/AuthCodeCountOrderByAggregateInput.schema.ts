import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional()
}).strict();
export const AuthCodeCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AuthCodeCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeCountOrderByAggregateInput>;
export const AuthCodeCountOrderByAggregateInputObjectZodSchema = makeSchema();
