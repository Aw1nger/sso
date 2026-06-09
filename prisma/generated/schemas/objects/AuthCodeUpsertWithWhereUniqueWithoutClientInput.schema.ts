import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuthCodeWhereUniqueInputObjectSchema as AuthCodeWhereUniqueInputObjectSchema } from './AuthCodeWhereUniqueInput.schema';
import { AuthCodeUpdateWithoutClientInputObjectSchema as AuthCodeUpdateWithoutClientInputObjectSchema } from './AuthCodeUpdateWithoutClientInput.schema';
import { AuthCodeUncheckedUpdateWithoutClientInputObjectSchema as AuthCodeUncheckedUpdateWithoutClientInputObjectSchema } from './AuthCodeUncheckedUpdateWithoutClientInput.schema';
import { AuthCodeCreateWithoutClientInputObjectSchema as AuthCodeCreateWithoutClientInputObjectSchema } from './AuthCodeCreateWithoutClientInput.schema';
import { AuthCodeUncheckedCreateWithoutClientInputObjectSchema as AuthCodeUncheckedCreateWithoutClientInputObjectSchema } from './AuthCodeUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AuthCodeWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AuthCodeUpdateWithoutClientInputObjectSchema), z.lazy(() => AuthCodeUncheckedUpdateWithoutClientInputObjectSchema)]),
  create: z.union([z.lazy(() => AuthCodeCreateWithoutClientInputObjectSchema), z.lazy(() => AuthCodeUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const AuthCodeUpsertWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.AuthCodeUpsertWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeUpsertWithWhereUniqueWithoutClientInput>;
export const AuthCodeUpsertWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
