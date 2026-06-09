import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionScalarWhereInputObjectSchema as SessionScalarWhereInputObjectSchema } from './SessionScalarWhereInput.schema';
import { SessionUpdateManyMutationInputObjectSchema as SessionUpdateManyMutationInputObjectSchema } from './SessionUpdateManyMutationInput.schema';
import { SessionUncheckedUpdateManyWithoutClientInputObjectSchema as SessionUncheckedUpdateManyWithoutClientInputObjectSchema } from './SessionUncheckedUpdateManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SessionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SessionUpdateManyMutationInputObjectSchema), z.lazy(() => SessionUncheckedUpdateManyWithoutClientInputObjectSchema)])
}).strict();
export const SessionUpdateManyWithWhereWithoutClientInputObjectSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutClientInput>;
export const SessionUpdateManyWithWhereWithoutClientInputObjectZodSchema = makeSchema();
