import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserCreateWithoutAuthCodesInputObjectSchema as UserCreateWithoutAuthCodesInputObjectSchema } from './UserCreateWithoutAuthCodesInput.schema';
import { UserUncheckedCreateWithoutAuthCodesInputObjectSchema as UserUncheckedCreateWithoutAuthCodesInputObjectSchema } from './UserUncheckedCreateWithoutAuthCodesInput.schema';
import { UserCreateOrConnectWithoutAuthCodesInputObjectSchema as UserCreateOrConnectWithoutAuthCodesInputObjectSchema } from './UserCreateOrConnectWithoutAuthCodesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutAuthCodesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAuthCodesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAuthCodesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutAuthCodesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAuthCodesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutAuthCodesInput>;
export const UserCreateNestedOneWithoutAuthCodesInputObjectZodSchema = makeSchema();
