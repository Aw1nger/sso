import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ClientCreateredirectUriInputObjectSchema as ClientCreateredirectUriInputObjectSchema } from './ClientCreateredirectUriInput.schema';
import { AuthCodeUncheckedCreateNestedManyWithoutClientInputObjectSchema as AuthCodeUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './AuthCodeUncheckedCreateNestedManyWithoutClientInput.schema';
import { SessionUncheckedCreateNestedManyWithoutClientInputObjectSchema as SessionUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  secret: z.string(),
  redirectUri: z.union([z.lazy(() => ClientCreateredirectUriInputObjectSchema), z.string().array()]).optional(),
  AuthCode: z.lazy(() => AuthCodeUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional(),
  Session: z.lazy(() => SessionUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional()
}).strict();
export const ClientUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ClientUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUncheckedCreateInput>;
export const ClientUncheckedCreateInputObjectZodSchema = makeSchema();
