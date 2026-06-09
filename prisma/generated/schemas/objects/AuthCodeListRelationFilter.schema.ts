import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuthCodeWhereInputObjectSchema as AuthCodeWhereInputObjectSchema } from './AuthCodeWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => AuthCodeWhereInputObjectSchema).optional(),
  some: z.lazy(() => AuthCodeWhereInputObjectSchema).optional(),
  none: z.lazy(() => AuthCodeWhereInputObjectSchema).optional()
}).strict();
export const AuthCodeListRelationFilterObjectSchema: z.ZodType<Prisma.AuthCodeListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeListRelationFilter>;
export const AuthCodeListRelationFilterObjectZodSchema = makeSchema();
