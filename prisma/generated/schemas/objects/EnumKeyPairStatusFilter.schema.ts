import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { KeyPairStatusSchema } from '../enums/KeyPairStatus.schema';
import { NestedEnumKeyPairStatusFilterObjectSchema as NestedEnumKeyPairStatusFilterObjectSchema } from './NestedEnumKeyPairStatusFilter.schema'

const makeSchema = () => z.object({
  equals: KeyPairStatusSchema.optional(),
  in: KeyPairStatusSchema.array().optional(),
  notIn: KeyPairStatusSchema.array().optional(),
  not: z.union([KeyPairStatusSchema, z.lazy(() => NestedEnumKeyPairStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumKeyPairStatusFilterObjectSchema: z.ZodType<Prisma.EnumKeyPairStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumKeyPairStatusFilter>;
export const EnumKeyPairStatusFilterObjectZodSchema = makeSchema();
