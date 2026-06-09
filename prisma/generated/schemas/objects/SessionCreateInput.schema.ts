import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserCreateNestedOneWithoutSessionInputObjectSchema as UserCreateNestedOneWithoutSessionInputObjectSchema } from './UserCreateNestedOneWithoutSessionInput.schema';
import { ClientCreateNestedOneWithoutSessionInputObjectSchema as ClientCreateNestedOneWithoutSessionInputObjectSchema } from './ClientCreateNestedOneWithoutSessionInput.schema'

const makeSchema = () => z.object({
  token: z.string(),
  revoked: z.boolean().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutSessionInputObjectSchema),
  client: z.lazy(() => ClientCreateNestedOneWithoutSessionInputObjectSchema)
}).strict();
export const SessionCreateInputObjectSchema: z.ZodType<Prisma.SessionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionCreateInput>;
export const SessionCreateInputObjectZodSchema = makeSchema();
