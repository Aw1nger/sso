import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ClientCreateredirectUriInputObjectSchema as ClientCreateredirectUriInputObjectSchema } from './ClientCreateredirectUriInput.schema';
import { AuthCodeCreateNestedManyWithoutClientInputObjectSchema as AuthCodeCreateNestedManyWithoutClientInputObjectSchema } from './AuthCodeCreateNestedManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  secret: z.string(),
  redirectUri: z.union([z.lazy(() => ClientCreateredirectUriInputObjectSchema), z.string().array()]).optional(),
  AuthCode: z.lazy(() => AuthCodeCreateNestedManyWithoutClientInputObjectSchema).optional()
}).strict();
export const ClientCreateWithoutSessionInputObjectSchema: z.ZodType<Prisma.ClientCreateWithoutSessionInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateWithoutSessionInput>;
export const ClientCreateWithoutSessionInputObjectZodSchema = makeSchema();
