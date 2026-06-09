import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { ClientArgsObjectSchema as ClientArgsObjectSchema } from './ClientArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  token: z.boolean().optional(),
  userId: z.boolean().optional(),
  clientId: z.boolean().optional(),
  revoked: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  client: z.union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)]).optional()
}).strict();
export const SessionSelectObjectSchema: z.ZodType<Prisma.SessionSelect> = makeSchema() as unknown as z.ZodType<Prisma.SessionSelect>;
export const SessionSelectObjectZodSchema = makeSchema();
