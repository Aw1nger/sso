import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ClientCreateNestedOneWithoutSessionInputObjectSchema as ClientCreateNestedOneWithoutSessionInputObjectSchema } from './ClientCreateNestedOneWithoutSessionInput.schema'

const makeSchema = () => z.object({
  token: z.string(),
  revoked: z.boolean().optional(),
  client: z.lazy(() => ClientCreateNestedOneWithoutSessionInputObjectSchema)
}).strict();
export const SessionCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionCreateWithoutUserInput>;
export const SessionCreateWithoutUserInputObjectZodSchema = makeSchema();
