import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuthCodeWhereUniqueInputObjectSchema as AuthCodeWhereUniqueInputObjectSchema } from './AuthCodeWhereUniqueInput.schema';
import { AuthCodeUpdateWithoutClientInputObjectSchema as AuthCodeUpdateWithoutClientInputObjectSchema } from './AuthCodeUpdateWithoutClientInput.schema';
import { AuthCodeUncheckedUpdateWithoutClientInputObjectSchema as AuthCodeUncheckedUpdateWithoutClientInputObjectSchema } from './AuthCodeUncheckedUpdateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AuthCodeWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AuthCodeUpdateWithoutClientInputObjectSchema), z.lazy(() => AuthCodeUncheckedUpdateWithoutClientInputObjectSchema)])
}).strict();
export const AuthCodeUpdateWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.AuthCodeUpdateWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeUpdateWithWhereUniqueWithoutClientInput>;
export const AuthCodeUpdateWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
