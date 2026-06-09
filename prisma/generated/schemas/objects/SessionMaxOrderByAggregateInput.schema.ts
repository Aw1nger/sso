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
export const SessionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionMaxOrderByAggregateInput>;
export const SessionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
