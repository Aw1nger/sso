import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserCreateNestedOneWithoutSessionInputObjectSchema as UserCreateNestedOneWithoutSessionInputObjectSchema } from './UserCreateNestedOneWithoutSessionInput.schema'

const makeSchema = () => z.object({
  token: z.string(),
  revoked: z.boolean().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutSessionInputObjectSchema)
}).strict();
export const SessionCreateWithoutClientInputObjectSchema: z.ZodType<Prisma.SessionCreateWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionCreateWithoutClientInput>;
export const SessionCreateWithoutClientInputObjectZodSchema = makeSchema();
