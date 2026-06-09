import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserCreateNestedOneWithoutAuthCodesInputObjectSchema as UserCreateNestedOneWithoutAuthCodesInputObjectSchema } from './UserCreateNestedOneWithoutAuthCodesInput.schema';
import { ClientCreateNestedOneWithoutAuthCodeInputObjectSchema as ClientCreateNestedOneWithoutAuthCodeInputObjectSchema } from './ClientCreateNestedOneWithoutAuthCodeInput.schema'

const makeSchema = () => z.object({
  code: z.string(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAuthCodesInputObjectSchema),
  client: z.lazy(() => ClientCreateNestedOneWithoutAuthCodeInputObjectSchema)
}).strict();
export const AuthCodeCreateInputObjectSchema: z.ZodType<Prisma.AuthCodeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeCreateInput>;
export const AuthCodeCreateInputObjectZodSchema = makeSchema();
