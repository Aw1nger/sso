import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuthCodeSelectObjectSchema as AuthCodeSelectObjectSchema } from './AuthCodeSelect.schema';
import { AuthCodeIncludeObjectSchema as AuthCodeIncludeObjectSchema } from './AuthCodeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AuthCodeSelectObjectSchema).optional(),
  include: z.lazy(() => AuthCodeIncludeObjectSchema).optional()
}).strict();
export const AuthCodeArgsObjectSchema = makeSchema();
export const AuthCodeArgsObjectZodSchema = makeSchema();
