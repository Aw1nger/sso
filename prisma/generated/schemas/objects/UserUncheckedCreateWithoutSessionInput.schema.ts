import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserStatusSchema } from '../enums/UserStatus.schema';
import { RoleSchema } from '../enums/Role.schema';
import { AuthCodeUncheckedCreateNestedManyWithoutUserInputObjectSchema as AuthCodeUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AuthCodeUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  email: z.string(),
  username: z.string(),
  firstname: z.string().optional().nullable(),
  lastname: z.string().optional().nullable(),
  avatar: z.string().optional().nullable(),
  accountStatus: UserStatusSchema.optional(),
  role: RoleSchema.optional(),
  AuthCodes: z.lazy(() => AuthCodeUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutSessionInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutSessionInput>;
export const UserUncheckedCreateWithoutSessionInputObjectZodSchema = makeSchema();
