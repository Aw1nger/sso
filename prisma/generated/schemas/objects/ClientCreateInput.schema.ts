import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ClientCreateredirectUriInputObjectSchema as ClientCreateredirectUriInputObjectSchema } from './ClientCreateredirectUriInput.schema';
import { AuthCodeCreateNestedManyWithoutClientInputObjectSchema as AuthCodeCreateNestedManyWithoutClientInputObjectSchema } from './AuthCodeCreateNestedManyWithoutClientInput.schema';
import { SessionCreateNestedManyWithoutClientInputObjectSchema as SessionCreateNestedManyWithoutClientInputObjectSchema } from './SessionCreateNestedManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  secret: z.string(),
  redirectUri: z.union([z.lazy(() => ClientCreateredirectUriInputObjectSchema), z.string().array()]).optional(),
  AuthCode: z.lazy(() => AuthCodeCreateNestedManyWithoutClientInputObjectSchema).optional(),
  Session: z.lazy(() => SessionCreateNestedManyWithoutClientInputObjectSchema).optional()
}).strict();
export const ClientCreateInputObjectSchema: z.ZodType<Prisma.ClientCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateInput>;
export const ClientCreateInputObjectZodSchema = makeSchema();
