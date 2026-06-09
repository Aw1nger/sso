import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionWhereUniqueInputObjectSchema as SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';
import { SessionCreateWithoutClientInputObjectSchema as SessionCreateWithoutClientInputObjectSchema } from './SessionCreateWithoutClientInput.schema';
import { SessionUncheckedCreateWithoutClientInputObjectSchema as SessionUncheckedCreateWithoutClientInputObjectSchema } from './SessionUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SessionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SessionCreateWithoutClientInputObjectSchema), z.lazy(() => SessionUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const SessionCreateOrConnectWithoutClientInputObjectSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionCreateOrConnectWithoutClientInput>;
export const SessionCreateOrConnectWithoutClientInputObjectZodSchema = makeSchema();
