import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserUpdateWithoutAuthCodesInputObjectSchema as UserUpdateWithoutAuthCodesInputObjectSchema } from './UserUpdateWithoutAuthCodesInput.schema';
import { UserUncheckedUpdateWithoutAuthCodesInputObjectSchema as UserUncheckedUpdateWithoutAuthCodesInputObjectSchema } from './UserUncheckedUpdateWithoutAuthCodesInput.schema';
import { UserCreateWithoutAuthCodesInputObjectSchema as UserCreateWithoutAuthCodesInputObjectSchema } from './UserCreateWithoutAuthCodesInput.schema';
import { UserUncheckedCreateWithoutAuthCodesInputObjectSchema as UserUncheckedCreateWithoutAuthCodesInputObjectSchema } from './UserUncheckedCreateWithoutAuthCodesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutAuthCodesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAuthCodesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutAuthCodesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAuthCodesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutAuthCodesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutAuthCodesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutAuthCodesInput>;
export const UserUpsertWithoutAuthCodesInputObjectZodSchema = makeSchema();
