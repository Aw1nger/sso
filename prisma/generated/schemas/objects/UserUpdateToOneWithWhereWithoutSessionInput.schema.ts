import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutSessionInputObjectSchema as UserUpdateWithoutSessionInputObjectSchema } from './UserUpdateWithoutSessionInput.schema';
import { UserUncheckedUpdateWithoutSessionInputObjectSchema as UserUncheckedUpdateWithoutSessionInputObjectSchema } from './UserUncheckedUpdateWithoutSessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutSessionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSessionInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutSessionInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSessionInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSessionInput>;
export const UserUpdateToOneWithWhereWithoutSessionInputObjectZodSchema = makeSchema();
