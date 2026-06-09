import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { FirstRegisterCountOrderByAggregateInputObjectSchema as FirstRegisterCountOrderByAggregateInputObjectSchema } from './FirstRegisterCountOrderByAggregateInput.schema';
import { FirstRegisterAvgOrderByAggregateInputObjectSchema as FirstRegisterAvgOrderByAggregateInputObjectSchema } from './FirstRegisterAvgOrderByAggregateInput.schema';
import { FirstRegisterMaxOrderByAggregateInputObjectSchema as FirstRegisterMaxOrderByAggregateInputObjectSchema } from './FirstRegisterMaxOrderByAggregateInput.schema';
import { FirstRegisterMinOrderByAggregateInputObjectSchema as FirstRegisterMinOrderByAggregateInputObjectSchema } from './FirstRegisterMinOrderByAggregateInput.schema';
import { FirstRegisterSumOrderByAggregateInputObjectSchema as FirstRegisterSumOrderByAggregateInputObjectSchema } from './FirstRegisterSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  _count: z.lazy(() => FirstRegisterCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => FirstRegisterAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => FirstRegisterMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => FirstRegisterMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => FirstRegisterSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const FirstRegisterOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.FirstRegisterOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.FirstRegisterOrderByWithAggregationInput>;
export const FirstRegisterOrderByWithAggregationInputObjectZodSchema = makeSchema();
