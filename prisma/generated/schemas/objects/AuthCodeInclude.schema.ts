import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { ClientArgsObjectSchema as ClientArgsObjectSchema } from './ClientArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  client: z.union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)]).optional()
}).strict();
export const AuthCodeIncludeObjectSchema: z.ZodType<Prisma.AuthCodeInclude> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeInclude>;
export const AuthCodeIncludeObjectZodSchema = makeSchema();
