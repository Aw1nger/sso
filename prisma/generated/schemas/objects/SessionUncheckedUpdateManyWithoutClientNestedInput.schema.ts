import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionCreateWithoutClientInputObjectSchema as SessionCreateWithoutClientInputObjectSchema } from './SessionCreateWithoutClientInput.schema';
import { SessionUncheckedCreateWithoutClientInputObjectSchema as SessionUncheckedCreateWithoutClientInputObjectSchema } from './SessionUncheckedCreateWithoutClientInput.schema';
import { SessionCreateOrConnectWithoutClientInputObjectSchema as SessionCreateOrConnectWithoutClientInputObjectSchema } from './SessionCreateOrConnectWithoutClientInput.schema';
import { SessionUpsertWithWhereUniqueWithoutClientInputObjectSchema as SessionUpsertWithWhereUniqueWithoutClientInputObjectSchema } from './SessionUpsertWithWhereUniqueWithoutClientInput.schema';
import { SessionCreateManyClientInputEnvelopeObjectSchema as SessionCreateManyClientInputEnvelopeObjectSchema } from './SessionCreateManyClientInputEnvelope.schema';
import { SessionWhereUniqueInputObjectSchema as SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';
import { SessionUpdateWithWhereUniqueWithoutClientInputObjectSchema as SessionUpdateWithWhereUniqueWithoutClientInputObjectSchema } from './SessionUpdateWithWhereUniqueWithoutClientInput.schema';
import { SessionUpdateManyWithWhereWithoutClientInputObjectSchema as SessionUpdateManyWithWhereWithoutClientInputObjectSchema } from './SessionUpdateManyWithWhereWithoutClientInput.schema';
import { SessionScalarWhereInputObjectSchema as SessionScalarWhereInputObjectSchema } from './SessionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SessionCreateWithoutClientInputObjectSchema), z.lazy(() => SessionCreateWithoutClientInputObjectSchema).array(), z.lazy(() => SessionUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => SessionUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SessionCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => SessionCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SessionUpsertWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => SessionUpsertWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SessionCreateManyClientInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SessionUpdateWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => SessionUpdateWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SessionUpdateManyWithWhereWithoutClientInputObjectSchema), z.lazy(() => SessionUpdateManyWithWhereWithoutClientInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SessionScalarWhereInputObjectSchema), z.lazy(() => SessionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SessionUncheckedUpdateManyWithoutClientNestedInputObjectSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutClientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutClientNestedInput>;
export const SessionUncheckedUpdateManyWithoutClientNestedInputObjectZodSchema = makeSchema();
