import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserStatusSchema } from '../enums/UserStatus.schema';
import { RoleSchema } from '../enums/Role.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  email: z.string(),
  username: z.string(),
  firstname: z.string().optional().nullable(),
  lastname: z.string().optional().nullable(),
  avatar: z.string().optional().nullable(),
  accountStatus: UserStatusSchema.optional(),
  role: RoleSchema.optional(),
  Session: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutAuthCodesInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutAuthCodesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutAuthCodesInput>;
export const UserCreateWithoutAuthCodesInputObjectZodSchema = makeSchema();
