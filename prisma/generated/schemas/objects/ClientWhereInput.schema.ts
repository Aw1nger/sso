import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { AuthCodeListRelationFilterObjectSchema as AuthCodeListRelationFilterObjectSchema } from './AuthCodeListRelationFilter.schema';
import { SessionListRelationFilterObjectSchema as SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema'

const clientwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ClientWhereInputObjectSchema), z.lazy(() => ClientWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ClientWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ClientWhereInputObjectSchema), z.lazy(() => ClientWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  secret: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  redirectUri: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  AuthCode: z.lazy(() => AuthCodeListRelationFilterObjectSchema).optional(),
  Session: z.lazy(() => SessionListRelationFilterObjectSchema).optional()
}).strict();
export const ClientWhereInputObjectSchema: z.ZodType<Prisma.ClientWhereInput> = clientwhereinputSchema as unknown as z.ZodType<Prisma.ClientWhereInput>;
export const ClientWhereInputObjectZodSchema = clientwhereinputSchema;
