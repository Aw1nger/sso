import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ClientCreateredirectUriInputObjectSchema as ClientCreateredirectUriInputObjectSchema } from './ClientCreateredirectUriInput.schema';
import { SessionUncheckedCreateNestedManyWithoutClientInputObjectSchema as SessionUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  secret: z.string(),
  redirectUri: z.union([z.lazy(() => ClientCreateredirectUriInputObjectSchema), z.string().array()]).optional(),
  Session: z.lazy(() => SessionUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional()
}).strict();
export const ClientUncheckedCreateWithoutAuthCodeInputObjectSchema: z.ZodType<Prisma.ClientUncheckedCreateWithoutAuthCodeInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUncheckedCreateWithoutAuthCodeInput>;
export const ClientUncheckedCreateWithoutAuthCodeInputObjectZodSchema = makeSchema();
