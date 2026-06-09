import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { EnumKeyPairStatusWithAggregatesFilterObjectSchema as EnumKeyPairStatusWithAggregatesFilterObjectSchema } from './EnumKeyPairStatusWithAggregatesFilter.schema';
import { KeyPairStatusSchema } from '../enums/KeyPairStatus.schema'

const keypairscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => KeyPairScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => KeyPairScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => KeyPairScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => KeyPairScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => KeyPairScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  publicKey: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  privateKey: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  alghoritm: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumKeyPairStatusWithAggregatesFilterObjectSchema), KeyPairStatusSchema]).optional()
}).strict();
export const KeyPairScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.KeyPairScalarWhereWithAggregatesInput> = keypairscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.KeyPairScalarWhereWithAggregatesInput>;
export const KeyPairScalarWhereWithAggregatesInputObjectZodSchema = keypairscalarwherewithaggregatesinputSchema;
