import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const firstregisterscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => FirstRegisterScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => FirstRegisterScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FirstRegisterScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FirstRegisterScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => FirstRegisterScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  username: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  expiresAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const FirstRegisterScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.FirstRegisterScalarWhereWithAggregatesInput> = firstregisterscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.FirstRegisterScalarWhereWithAggregatesInput>;
export const FirstRegisterScalarWhereWithAggregatesInputObjectZodSchema = firstregisterscalarwherewithaggregatesinputSchema;
