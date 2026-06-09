import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuthCodeWhereUniqueInputObjectSchema as AuthCodeWhereUniqueInputObjectSchema } from './AuthCodeWhereUniqueInput.schema';
import { AuthCodeUpdateWithoutUserInputObjectSchema as AuthCodeUpdateWithoutUserInputObjectSchema } from './AuthCodeUpdateWithoutUserInput.schema';
import { AuthCodeUncheckedUpdateWithoutUserInputObjectSchema as AuthCodeUncheckedUpdateWithoutUserInputObjectSchema } from './AuthCodeUncheckedUpdateWithoutUserInput.schema';
import { AuthCodeCreateWithoutUserInputObjectSchema as AuthCodeCreateWithoutUserInputObjectSchema } from './AuthCodeCreateWithoutUserInput.schema';
import { AuthCodeUncheckedCreateWithoutUserInputObjectSchema as AuthCodeUncheckedCreateWithoutUserInputObjectSchema } from './AuthCodeUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AuthCodeWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AuthCodeUpdateWithoutUserInputObjectSchema), z.lazy(() => AuthCodeUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => AuthCodeCreateWithoutUserInputObjectSchema), z.lazy(() => AuthCodeUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const AuthCodeUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.AuthCodeUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeUpsertWithWhereUniqueWithoutUserInput>;
export const AuthCodeUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
