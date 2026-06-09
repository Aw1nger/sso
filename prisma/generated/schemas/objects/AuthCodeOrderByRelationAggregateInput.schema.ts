import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const AuthCodeOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.AuthCodeOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeOrderByRelationAggregateInput>;
export const AuthCodeOrderByRelationAggregateInputObjectZodSchema = makeSchema();
