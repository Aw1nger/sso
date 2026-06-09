import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ClientCreateredirectUriInputObjectSchema as ClientCreateredirectUriInputObjectSchema } from './ClientCreateredirectUriInput.schema';
import { SessionCreateNestedManyWithoutClientInputObjectSchema as SessionCreateNestedManyWithoutClientInputObjectSchema } from './SessionCreateNestedManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  secret: z.string(),
  redirectUri: z.union([z.lazy(() => ClientCreateredirectUriInputObjectSchema), z.string().array()]).optional(),
  Session: z.lazy(() => SessionCreateNestedManyWithoutClientInputObjectSchema).optional()
}).strict();
export const ClientCreateWithoutAuthCodeInputObjectSchema: z.ZodType<Prisma.ClientCreateWithoutAuthCodeInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateWithoutAuthCodeInput>;
export const ClientCreateWithoutAuthCodeInputObjectZodSchema = makeSchema();
