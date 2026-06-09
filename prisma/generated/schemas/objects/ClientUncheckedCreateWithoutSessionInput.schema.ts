import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ClientCreateredirectUriInputObjectSchema as ClientCreateredirectUriInputObjectSchema } from './ClientCreateredirectUriInput.schema';
import { AuthCodeUncheckedCreateNestedManyWithoutClientInputObjectSchema as AuthCodeUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './AuthCodeUncheckedCreateNestedManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  secret: z.string(),
  redirectUri: z.union([z.lazy(() => ClientCreateredirectUriInputObjectSchema), z.string().array()]).optional(),
  AuthCode: z.lazy(() => AuthCodeUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional()
}).strict();
export const ClientUncheckedCreateWithoutSessionInputObjectSchema: z.ZodType<Prisma.ClientUncheckedCreateWithoutSessionInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUncheckedCreateWithoutSessionInput>;
export const ClientUncheckedCreateWithoutSessionInputObjectZodSchema = makeSchema();
