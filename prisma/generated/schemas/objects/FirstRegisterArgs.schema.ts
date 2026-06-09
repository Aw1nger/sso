import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FirstRegisterSelectObjectSchema as FirstRegisterSelectObjectSchema } from './FirstRegisterSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => FirstRegisterSelectObjectSchema).optional()
}).strict();
export const FirstRegisterArgsObjectSchema = makeSchema();
export const FirstRegisterArgsObjectZodSchema = makeSchema();
