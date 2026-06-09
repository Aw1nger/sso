import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionCreateWithoutClientInputObjectSchema as SessionCreateWithoutClientInputObjectSchema } from './SessionCreateWithoutClientInput.schema';
import { SessionUncheckedCreateWithoutClientInputObjectSchema as SessionUncheckedCreateWithoutClientInputObjectSchema } from './SessionUncheckedCreateWithoutClientInput.schema';
import { SessionCreateOrConnectWithoutClientInputObjectSchema as SessionCreateOrConnectWithoutClientInputObjectSchema } from './SessionCreateOrConnectWithoutClientInput.schema';
import { SessionCreateManyClientInputEnvelopeObjectSchema as SessionCreateManyClientInputEnvelopeObjectSchema } from './SessionCreateManyClientInputEnvelope.schema';
import { SessionWhereUniqueInputObjectSchema as SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SessionCreateWithoutClientInputObjectSchema), z.lazy(() => SessionCreateWithoutClientInputObjectSchema).array(), z.lazy(() => SessionUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => SessionUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SessionCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => SessionCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SessionCreateManyClientInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SessionUncheckedCreateNestedManyWithoutClientInputObjectSchema: z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutClientInput>;
export const SessionUncheckedCreateNestedManyWithoutClientInputObjectZodSchema = makeSchema();
