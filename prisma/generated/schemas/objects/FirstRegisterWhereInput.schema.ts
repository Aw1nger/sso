import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const firstregisterwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => FirstRegisterWhereInputObjectSchema), z.lazy(() => FirstRegisterWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FirstRegisterWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FirstRegisterWhereInputObjectSchema), z.lazy(() => FirstRegisterWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  username: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  expiresAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const FirstRegisterWhereInputObjectSchema: z.ZodType<Prisma.FirstRegisterWhereInput> = firstregisterwhereinputSchema as unknown as z.ZodType<Prisma.FirstRegisterWhereInput>;
export const FirstRegisterWhereInputObjectZodSchema = firstregisterwhereinputSchema;
