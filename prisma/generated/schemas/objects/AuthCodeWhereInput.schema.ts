import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ClientScalarRelationFilterObjectSchema as ClientScalarRelationFilterObjectSchema } from './ClientScalarRelationFilter.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema'

const authcodewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AuthCodeWhereInputObjectSchema), z.lazy(() => AuthCodeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AuthCodeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AuthCodeWhereInputObjectSchema), z.lazy(() => AuthCodeWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  clientId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  client: z.union([z.lazy(() => ClientScalarRelationFilterObjectSchema), z.lazy(() => ClientWhereInputObjectSchema)]).optional()
}).strict();
export const AuthCodeWhereInputObjectSchema: z.ZodType<Prisma.AuthCodeWhereInput> = authcodewhereinputSchema as unknown as z.ZodType<Prisma.AuthCodeWhereInput>;
export const AuthCodeWhereInputObjectZodSchema = authcodewhereinputSchema;
