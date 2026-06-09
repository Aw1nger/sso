import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuthCodeFindManySchema as AuthCodeFindManySchema } from '../findManyAuthCode.schema';
import { SessionFindManySchema as SessionFindManySchema } from '../findManySession.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  username: z.boolean().optional(),
  firstname: z.boolean().optional(),
  lastname: z.boolean().optional(),
  avatar: z.boolean().optional(),
  aproved: z.boolean().optional(),
  AuthCodes: z.union([z.boolean(), z.lazy(() => AuthCodeFindManySchema)]).optional(),
  Session: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectZodSchema = makeSchema();
