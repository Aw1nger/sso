import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ClientScalarRelationFilterObjectSchema as ClientScalarRelationFilterObjectSchema } from './ClientScalarRelationFilter.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema'

const sessionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SessionWhereInputObjectSchema), z.lazy(() => SessionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SessionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SessionWhereInputObjectSchema), z.lazy(() => SessionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  token: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  clientId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  revoked: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  client: z.union([z.lazy(() => ClientScalarRelationFilterObjectSchema), z.lazy(() => ClientWhereInputObjectSchema)]).optional()
}).strict();
export const SessionWhereInputObjectSchema: z.ZodType<Prisma.SessionWhereInput> = sessionwhereinputSchema as unknown as z.ZodType<Prisma.SessionWhereInput>;
export const SessionWhereInputObjectZodSchema = sessionwhereinputSchema;
