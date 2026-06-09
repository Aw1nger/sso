import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionWhereUniqueInputObjectSchema as SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';
import { SessionUpdateWithoutClientInputObjectSchema as SessionUpdateWithoutClientInputObjectSchema } from './SessionUpdateWithoutClientInput.schema';
import { SessionUncheckedUpdateWithoutClientInputObjectSchema as SessionUncheckedUpdateWithoutClientInputObjectSchema } from './SessionUncheckedUpdateWithoutClientInput.schema';
import { SessionCreateWithoutClientInputObjectSchema as SessionCreateWithoutClientInputObjectSchema } from './SessionCreateWithoutClientInput.schema';
import { SessionUncheckedCreateWithoutClientInputObjectSchema as SessionUncheckedCreateWithoutClientInputObjectSchema } from './SessionUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SessionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SessionUpdateWithoutClientInputObjectSchema), z.lazy(() => SessionUncheckedUpdateWithoutClientInputObjectSchema)]),
  create: z.union([z.lazy(() => SessionCreateWithoutClientInputObjectSchema), z.lazy(() => SessionUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const SessionUpsertWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutClientInput>;
export const SessionUpsertWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
