import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuthCodeFindManySchema as AuthCodeFindManySchema } from '../findManyAuthCode.schema';
import { SessionFindManySchema as SessionFindManySchema } from '../findManySession.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  AuthCodes: z.union([z.boolean(), z.lazy(() => AuthCodeFindManySchema)]).optional(),
  Session: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectZodSchema = makeSchema();
