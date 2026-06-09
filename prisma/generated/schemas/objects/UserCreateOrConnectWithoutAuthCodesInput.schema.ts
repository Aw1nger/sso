import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutAuthCodesInputObjectSchema as UserCreateWithoutAuthCodesInputObjectSchema } from './UserCreateWithoutAuthCodesInput.schema';
import { UserUncheckedCreateWithoutAuthCodesInputObjectSchema as UserUncheckedCreateWithoutAuthCodesInputObjectSchema } from './UserUncheckedCreateWithoutAuthCodesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutAuthCodesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAuthCodesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutAuthCodesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAuthCodesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutAuthCodesInput>;
export const UserCreateOrConnectWithoutAuthCodesInputObjectZodSchema = makeSchema();
