import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserCreateWithoutAuthCodesInputObjectSchema as UserCreateWithoutAuthCodesInputObjectSchema } from './UserCreateWithoutAuthCodesInput.schema';
import { UserUncheckedCreateWithoutAuthCodesInputObjectSchema as UserUncheckedCreateWithoutAuthCodesInputObjectSchema } from './UserUncheckedCreateWithoutAuthCodesInput.schema';
import { UserCreateOrConnectWithoutAuthCodesInputObjectSchema as UserCreateOrConnectWithoutAuthCodesInputObjectSchema } from './UserCreateOrConnectWithoutAuthCodesInput.schema';
import { UserUpsertWithoutAuthCodesInputObjectSchema as UserUpsertWithoutAuthCodesInputObjectSchema } from './UserUpsertWithoutAuthCodesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutAuthCodesInputObjectSchema as UserUpdateToOneWithWhereWithoutAuthCodesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutAuthCodesInput.schema';
import { UserUpdateWithoutAuthCodesInputObjectSchema as UserUpdateWithoutAuthCodesInputObjectSchema } from './UserUpdateWithoutAuthCodesInput.schema';
import { UserUncheckedUpdateWithoutAuthCodesInputObjectSchema as UserUncheckedUpdateWithoutAuthCodesInputObjectSchema } from './UserUncheckedUpdateWithoutAuthCodesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutAuthCodesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAuthCodesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAuthCodesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAuthCodesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutAuthCodesInputObjectSchema), z.lazy(() => UserUpdateWithoutAuthCodesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAuthCodesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutAuthCodesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAuthCodesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutAuthCodesNestedInput>;
export const UserUpdateOneRequiredWithoutAuthCodesNestedInputObjectZodSchema = makeSchema();
