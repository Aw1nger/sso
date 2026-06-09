import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuthCodeFindManySchema as AuthCodeFindManySchema } from '../findManyAuthCode.schema';
import { SessionFindManySchema as SessionFindManySchema } from '../findManySession.schema';
import { ClientCountOutputTypeArgsObjectSchema as ClientCountOutputTypeArgsObjectSchema } from './ClientCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  AuthCode: z.union([z.boolean(), z.lazy(() => AuthCodeFindManySchema)]).optional(),
  Session: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ClientIncludeObjectSchema: z.ZodType<Prisma.ClientInclude> = makeSchema() as unknown as z.ZodType<Prisma.ClientInclude>;
export const ClientIncludeObjectZodSchema = makeSchema();
