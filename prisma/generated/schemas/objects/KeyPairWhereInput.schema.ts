import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumKeyPairStatusFilterObjectSchema as EnumKeyPairStatusFilterObjectSchema } from './EnumKeyPairStatusFilter.schema';
import { KeyPairStatusSchema } from '../enums/KeyPairStatus.schema'

const keypairwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => KeyPairWhereInputObjectSchema), z.lazy(() => KeyPairWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => KeyPairWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => KeyPairWhereInputObjectSchema), z.lazy(() => KeyPairWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  publicKey: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  privateKey: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  alghoritm: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumKeyPairStatusFilterObjectSchema), KeyPairStatusSchema]).optional()
}).strict();
export const KeyPairWhereInputObjectSchema: z.ZodType<Prisma.KeyPairWhereInput> = keypairwhereinputSchema as unknown as z.ZodType<Prisma.KeyPairWhereInput>;
export const KeyPairWhereInputObjectZodSchema = keypairwhereinputSchema;
