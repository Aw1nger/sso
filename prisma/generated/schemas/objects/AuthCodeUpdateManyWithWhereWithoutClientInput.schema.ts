import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuthCodeScalarWhereInputObjectSchema as AuthCodeScalarWhereInputObjectSchema } from './AuthCodeScalarWhereInput.schema';
import { AuthCodeUpdateManyMutationInputObjectSchema as AuthCodeUpdateManyMutationInputObjectSchema } from './AuthCodeUpdateManyMutationInput.schema';
import { AuthCodeUncheckedUpdateManyWithoutClientInputObjectSchema as AuthCodeUncheckedUpdateManyWithoutClientInputObjectSchema } from './AuthCodeUncheckedUpdateManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AuthCodeScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AuthCodeUpdateManyMutationInputObjectSchema), z.lazy(() => AuthCodeUncheckedUpdateManyWithoutClientInputObjectSchema)])
}).strict();
export const AuthCodeUpdateManyWithWhereWithoutClientInputObjectSchema: z.ZodType<Prisma.AuthCodeUpdateManyWithWhereWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeUpdateManyWithWhereWithoutClientInput>;
export const AuthCodeUpdateManyWithWhereWithoutClientInputObjectZodSchema = makeSchema();
