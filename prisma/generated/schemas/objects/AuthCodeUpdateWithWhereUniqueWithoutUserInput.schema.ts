import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuthCodeWhereUniqueInputObjectSchema as AuthCodeWhereUniqueInputObjectSchema } from './AuthCodeWhereUniqueInput.schema';
import { AuthCodeUpdateWithoutUserInputObjectSchema as AuthCodeUpdateWithoutUserInputObjectSchema } from './AuthCodeUpdateWithoutUserInput.schema';
import { AuthCodeUncheckedUpdateWithoutUserInputObjectSchema as AuthCodeUncheckedUpdateWithoutUserInputObjectSchema } from './AuthCodeUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AuthCodeWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AuthCodeUpdateWithoutUserInputObjectSchema), z.lazy(() => AuthCodeUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const AuthCodeUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.AuthCodeUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeUpdateWithWhereUniqueWithoutUserInput>;
export const AuthCodeUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
