import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { KeyPairStatusSchema } from '../enums/KeyPairStatus.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumKeyPairStatusFilterObjectSchema as NestedEnumKeyPairStatusFilterObjectSchema } from './NestedEnumKeyPairStatusFilter.schema'

const nestedenumkeypairstatuswithaggregatesfilterSchema = z.object({
  equals: KeyPairStatusSchema.optional(),
  in: KeyPairStatusSchema.array().optional(),
  notIn: KeyPairStatusSchema.array().optional(),
  not: z.union([KeyPairStatusSchema, z.lazy(() => NestedEnumKeyPairStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumKeyPairStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumKeyPairStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumKeyPairStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumKeyPairStatusWithAggregatesFilter> = nestedenumkeypairstatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumKeyPairStatusWithAggregatesFilter>;
export const NestedEnumKeyPairStatusWithAggregatesFilterObjectZodSchema = nestedenumkeypairstatuswithaggregatesfilterSchema;
