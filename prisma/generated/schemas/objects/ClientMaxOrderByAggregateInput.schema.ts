import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  secret: SortOrderSchema.optional()
}).strict();
export const ClientMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ClientMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientMaxOrderByAggregateInput>;
export const ClientMaxOrderByAggregateInputObjectZodSchema = makeSchema();
