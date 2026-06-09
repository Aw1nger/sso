import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { KeyPairSelectObjectSchema as KeyPairSelectObjectSchema } from './KeyPairSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => KeyPairSelectObjectSchema).optional()
}).strict();
export const KeyPairArgsObjectSchema = makeSchema();
export const KeyPairArgsObjectZodSchema = makeSchema();
