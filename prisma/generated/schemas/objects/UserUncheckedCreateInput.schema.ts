import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuthCodeUncheckedCreateNestedManyWithoutUserInputObjectSchema as AuthCodeUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AuthCodeUncheckedCreateNestedManyWithoutUserInput.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema as SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  email: z.string(),
  username: z.string(),
  firstname: z.string().optional().nullable(),
  lastname: z.string().optional().nullable(),
  avatar: z.string().optional().nullable(),
  aproved: z.boolean().optional(),
  AuthCodes: z.lazy(() => AuthCodeUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  Session: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateInput>;
export const UserUncheckedCreateInputObjectZodSchema = makeSchema();
