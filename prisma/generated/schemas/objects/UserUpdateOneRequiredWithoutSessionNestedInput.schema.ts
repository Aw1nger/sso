import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserCreateWithoutSessionInputObjectSchema as UserCreateWithoutSessionInputObjectSchema } from './UserCreateWithoutSessionInput.schema';
import { UserUncheckedCreateWithoutSessionInputObjectSchema as UserUncheckedCreateWithoutSessionInputObjectSchema } from './UserUncheckedCreateWithoutSessionInput.schema';
import { UserCreateOrConnectWithoutSessionInputObjectSchema as UserCreateOrConnectWithoutSessionInputObjectSchema } from './UserCreateOrConnectWithoutSessionInput.schema';
import { UserUpsertWithoutSessionInputObjectSchema as UserUpsertWithoutSessionInputObjectSchema } from './UserUpsertWithoutSessionInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutSessionInputObjectSchema as UserUpdateToOneWithWhereWithoutSessionInputObjectSchema } from './UserUpdateToOneWithWhereWithoutSessionInput.schema';
import { UserUpdateWithoutSessionInputObjectSchema as UserUpdateWithoutSessionInputObjectSchema } from './UserUpdateWithoutSessionInput.schema';
import { UserUncheckedUpdateWithoutSessionInputObjectSchema as UserUncheckedUpdateWithoutSessionInputObjectSchema } from './UserUncheckedUpdateWithoutSessionInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutSessionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSessionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSessionInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutSessionInputObjectSchema), z.lazy(() => UserUpdateWithoutSessionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSessionInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutSessionNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionNestedInput>;
export const UserUpdateOneRequiredWithoutSessionNestedInputObjectZodSchema = makeSchema();
