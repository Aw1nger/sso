import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserCreateWithoutSessionInputObjectSchema as UserCreateWithoutSessionInputObjectSchema } from './UserCreateWithoutSessionInput.schema';
import { UserUncheckedCreateWithoutSessionInputObjectSchema as UserUncheckedCreateWithoutSessionInputObjectSchema } from './UserUncheckedCreateWithoutSessionInput.schema';
import { UserCreateOrConnectWithoutSessionInputObjectSchema as UserCreateOrConnectWithoutSessionInputObjectSchema } from './UserCreateOrConnectWithoutSessionInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutSessionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSessionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutSessionInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSessionInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutSessionInput>;
export const UserCreateNestedOneWithoutSessionInputObjectZodSchema = makeSchema();
