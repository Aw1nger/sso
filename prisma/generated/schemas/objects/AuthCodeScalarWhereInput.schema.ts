import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const authcodescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AuthCodeScalarWhereInputObjectSchema), z.lazy(() => AuthCodeScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AuthCodeScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AuthCodeScalarWhereInputObjectSchema), z.lazy(() => AuthCodeScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  clientId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const AuthCodeScalarWhereInputObjectSchema: z.ZodType<Prisma.AuthCodeScalarWhereInput> = authcodescalarwhereinputSchema as unknown as z.ZodType<Prisma.AuthCodeScalarWhereInput>;
export const AuthCodeScalarWhereInputObjectZodSchema = authcodescalarwhereinputSchema;
