import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const authcodescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AuthCodeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AuthCodeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AuthCodeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AuthCodeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AuthCodeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  code: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  clientId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const AuthCodeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AuthCodeScalarWhereWithAggregatesInput> = authcodescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AuthCodeScalarWhereWithAggregatesInput>;
export const AuthCodeScalarWhereWithAggregatesInputObjectZodSchema = authcodescalarwherewithaggregatesinputSchema;
