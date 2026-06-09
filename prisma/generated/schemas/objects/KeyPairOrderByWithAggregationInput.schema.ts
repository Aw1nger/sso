import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { KeyPairCountOrderByAggregateInputObjectSchema as KeyPairCountOrderByAggregateInputObjectSchema } from './KeyPairCountOrderByAggregateInput.schema';
import { KeyPairAvgOrderByAggregateInputObjectSchema as KeyPairAvgOrderByAggregateInputObjectSchema } from './KeyPairAvgOrderByAggregateInput.schema';
import { KeyPairMaxOrderByAggregateInputObjectSchema as KeyPairMaxOrderByAggregateInputObjectSchema } from './KeyPairMaxOrderByAggregateInput.schema';
import { KeyPairMinOrderByAggregateInputObjectSchema as KeyPairMinOrderByAggregateInputObjectSchema } from './KeyPairMinOrderByAggregateInput.schema';
import { KeyPairSumOrderByAggregateInputObjectSchema as KeyPairSumOrderByAggregateInputObjectSchema } from './KeyPairSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  publicKey: SortOrderSchema.optional(),
  privateKey: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  alghoritm: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  _count: z.lazy(() => KeyPairCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => KeyPairAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => KeyPairMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => KeyPairMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => KeyPairSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const KeyPairOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.KeyPairOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.KeyPairOrderByWithAggregationInput>;
export const KeyPairOrderByWithAggregationInputObjectZodSchema = makeSchema();
