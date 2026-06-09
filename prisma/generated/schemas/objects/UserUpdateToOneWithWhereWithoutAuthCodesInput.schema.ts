import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutAuthCodesInputObjectSchema as UserUpdateWithoutAuthCodesInputObjectSchema } from './UserUpdateWithoutAuthCodesInput.schema';
import { UserUncheckedUpdateWithoutAuthCodesInputObjectSchema as UserUncheckedUpdateWithoutAuthCodesInputObjectSchema } from './UserUncheckedUpdateWithoutAuthCodesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutAuthCodesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAuthCodesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutAuthCodesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAuthCodesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAuthCodesInput>;
export const UserUpdateToOneWithWhereWithoutAuthCodesInputObjectZodSchema = makeSchema();
