import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AuthCodeCountOrderByAggregateInputObjectSchema as AuthCodeCountOrderByAggregateInputObjectSchema } from './AuthCodeCountOrderByAggregateInput.schema';
import { AuthCodeAvgOrderByAggregateInputObjectSchema as AuthCodeAvgOrderByAggregateInputObjectSchema } from './AuthCodeAvgOrderByAggregateInput.schema';
import { AuthCodeMaxOrderByAggregateInputObjectSchema as AuthCodeMaxOrderByAggregateInputObjectSchema } from './AuthCodeMaxOrderByAggregateInput.schema';
import { AuthCodeMinOrderByAggregateInputObjectSchema as AuthCodeMinOrderByAggregateInputObjectSchema } from './AuthCodeMinOrderByAggregateInput.schema';
import { AuthCodeSumOrderByAggregateInputObjectSchema as AuthCodeSumOrderByAggregateInputObjectSchema } from './AuthCodeSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  _count: z.lazy(() => AuthCodeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => AuthCodeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AuthCodeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AuthCodeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => AuthCodeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AuthCodeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AuthCodeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeOrderByWithAggregationInput>;
export const AuthCodeOrderByWithAggregationInputObjectZodSchema = makeSchema();
