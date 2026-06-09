import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserCreateNestedOneWithoutAuthCodesInputObjectSchema as UserCreateNestedOneWithoutAuthCodesInputObjectSchema } from './UserCreateNestedOneWithoutAuthCodesInput.schema'

const makeSchema = () => z.object({
  code: z.string(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAuthCodesInputObjectSchema)
}).strict();
export const AuthCodeCreateWithoutClientInputObjectSchema: z.ZodType<Prisma.AuthCodeCreateWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeCreateWithoutClientInput>;
export const AuthCodeCreateWithoutClientInputObjectZodSchema = makeSchema();
