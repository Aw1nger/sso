import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuthCodeFindManySchema as AuthCodeFindManySchema } from '../findManyAuthCode.schema';
import { SessionFindManySchema as SessionFindManySchema } from '../findManySession.schema';
import { ClientCountOutputTypeArgsObjectSchema as ClientCountOutputTypeArgsObjectSchema } from './ClientCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  secret: z.boolean().optional(),
  redirectUri: z.boolean().optional(),
  AuthCode: z.union([z.boolean(), z.lazy(() => AuthCodeFindManySchema)]).optional(),
  Session: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ClientSelectObjectSchema: z.ZodType<Prisma.ClientSelect> = makeSchema() as unknown as z.ZodType<Prisma.ClientSelect>;
export const ClientSelectObjectZodSchema = makeSchema();
