import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserStatusSchema } from '../enums/UserStatus.schema';
import { RoleSchema } from '../enums/Role.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema as SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  email: z.string(),
  username: z.string(),
  firstname: z.string().optional().nullable(),
  lastname: z.string().optional().nullable(),
  avatar: z.string().optional().nullable(),
  accountStatus: UserStatusSchema.optional(),
  role: RoleSchema.optional(),
  Session: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutAuthCodesInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAuthCodesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutAuthCodesInput>;
export const UserUncheckedCreateWithoutAuthCodesInputObjectZodSchema = makeSchema();
