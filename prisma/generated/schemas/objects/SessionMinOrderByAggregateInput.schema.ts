import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  token: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  revoked: SortOrderSchema.optional()
}).strict();
export const SessionMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SessionMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionMinOrderByAggregateInput>;
export const SessionMinOrderByAggregateInputObjectZodSchema = makeSchema();
