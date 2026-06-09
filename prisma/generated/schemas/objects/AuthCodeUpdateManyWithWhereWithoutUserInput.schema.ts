import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuthCodeScalarWhereInputObjectSchema as AuthCodeScalarWhereInputObjectSchema } from './AuthCodeScalarWhereInput.schema';
import { AuthCodeUpdateManyMutationInputObjectSchema as AuthCodeUpdateManyMutationInputObjectSchema } from './AuthCodeUpdateManyMutationInput.schema';
import { AuthCodeUncheckedUpdateManyWithoutUserInputObjectSchema as AuthCodeUncheckedUpdateManyWithoutUserInputObjectSchema } from './AuthCodeUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AuthCodeScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AuthCodeUpdateManyMutationInputObjectSchema), z.lazy(() => AuthCodeUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const AuthCodeUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.AuthCodeUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeUpdateManyWithWhereWithoutUserInput>;
export const AuthCodeUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
