import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutSessionInputObjectSchema as UserCreateWithoutSessionInputObjectSchema } from './UserCreateWithoutSessionInput.schema';
import { UserUncheckedCreateWithoutSessionInputObjectSchema as UserUncheckedCreateWithoutSessionInputObjectSchema } from './UserUncheckedCreateWithoutSessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutSessionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSessionInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutSessionInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSessionInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutSessionInput>;
export const UserCreateOrConnectWithoutSessionInputObjectZodSchema = makeSchema();
