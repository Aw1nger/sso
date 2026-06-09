import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuthCodeCreateNestedManyWithoutUserInputObjectSchema as AuthCodeCreateNestedManyWithoutUserInputObjectSchema } from './AuthCodeCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  email: z.string(),
  username: z.string(),
  firstname: z.string().optional().nullable(),
  lastname: z.string().optional().nullable(),
  avatar: z.string().optional().nullable(),
  aproved: z.boolean().optional(),
  AuthCodes: z.lazy(() => AuthCodeCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutSessionInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutSessionInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutSessionInput>;
export const UserCreateWithoutSessionInputObjectZodSchema = makeSchema();
