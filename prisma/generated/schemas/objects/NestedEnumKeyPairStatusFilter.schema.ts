import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { KeyPairStatusSchema } from '../enums/KeyPairStatus.schema'

const nestedenumkeypairstatusfilterSchema = z.object({
  equals: KeyPairStatusSchema.optional(),
  in: KeyPairStatusSchema.array().optional(),
  notIn: KeyPairStatusSchema.array().optional(),
  not: z.union([KeyPairStatusSchema, z.lazy(() => NestedEnumKeyPairStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumKeyPairStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumKeyPairStatusFilter> = nestedenumkeypairstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumKeyPairStatusFilter>;
export const NestedEnumKeyPairStatusFilterObjectZodSchema = nestedenumkeypairstatusfilterSchema;
