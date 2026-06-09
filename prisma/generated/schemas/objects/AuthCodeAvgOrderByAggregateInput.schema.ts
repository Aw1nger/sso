import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional()
}).strict();
export const AuthCodeAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AuthCodeAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeAvgOrderByAggregateInput>;
export const AuthCodeAvgOrderByAggregateInputObjectZodSchema = makeSchema();
