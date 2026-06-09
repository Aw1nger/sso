import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  secret: SortOrderSchema.optional(),
  redirectUri: SortOrderSchema.optional()
}).strict();
export const ClientCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ClientCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCountOrderByAggregateInput>;
export const ClientCountOrderByAggregateInputObjectZodSchema = makeSchema();
