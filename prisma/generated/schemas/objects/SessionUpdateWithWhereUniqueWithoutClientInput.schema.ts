import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionWhereUniqueInputObjectSchema as SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';
import { SessionUpdateWithoutClientInputObjectSchema as SessionUpdateWithoutClientInputObjectSchema } from './SessionUpdateWithoutClientInput.schema';
import { SessionUncheckedUpdateWithoutClientInputObjectSchema as SessionUncheckedUpdateWithoutClientInputObjectSchema } from './SessionUncheckedUpdateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SessionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SessionUpdateWithoutClientInputObjectSchema), z.lazy(() => SessionUncheckedUpdateWithoutClientInputObjectSchema)])
}).strict();
export const SessionUpdateWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutClientInput>;
export const SessionUpdateWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
