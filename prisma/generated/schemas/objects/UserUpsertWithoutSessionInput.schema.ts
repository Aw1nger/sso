import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserUpdateWithoutSessionInputObjectSchema as UserUpdateWithoutSessionInputObjectSchema } from './UserUpdateWithoutSessionInput.schema';
import { UserUncheckedUpdateWithoutSessionInputObjectSchema as UserUncheckedUpdateWithoutSessionInputObjectSchema } from './UserUncheckedUpdateWithoutSessionInput.schema';
import { UserCreateWithoutSessionInputObjectSchema as UserCreateWithoutSessionInputObjectSchema } from './UserCreateWithoutSessionInput.schema';
import { UserUncheckedCreateWithoutSessionInputObjectSchema as UserUncheckedCreateWithoutSessionInputObjectSchema } from './UserUncheckedCreateWithoutSessionInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutSessionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSessionInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutSessionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSessionInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutSessionInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutSessionInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutSessionInput>;
export const UserUpsertWithoutSessionInputObjectZodSchema = makeSchema();
