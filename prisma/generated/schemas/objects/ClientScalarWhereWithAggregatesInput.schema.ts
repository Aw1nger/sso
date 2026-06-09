import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema'

const clientscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ClientScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ClientScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ClientScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ClientScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ClientScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  secret: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  redirectUri: z.lazy(() => StringNullableListFilterObjectSchema).optional()
}).strict();
export const ClientScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ClientScalarWhereWithAggregatesInput> = clientscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ClientScalarWhereWithAggregatesInput>;
export const ClientScalarWhereWithAggregatesInputObjectZodSchema = clientscalarwherewithaggregatesinputSchema;
