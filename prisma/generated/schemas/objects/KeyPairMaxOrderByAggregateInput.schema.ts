import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  publicKey: SortOrderSchema.optional(),
  privateKey: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  alghoritm: SortOrderSchema.optional(),
  status: SortOrderSchema.optional()
}).strict();
export const KeyPairMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.KeyPairMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.KeyPairMaxOrderByAggregateInput>;
export const KeyPairMaxOrderByAggregateInputObjectZodSchema = makeSchema();
