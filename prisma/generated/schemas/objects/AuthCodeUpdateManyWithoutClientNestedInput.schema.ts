import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuthCodeCreateWithoutClientInputObjectSchema as AuthCodeCreateWithoutClientInputObjectSchema } from './AuthCodeCreateWithoutClientInput.schema';
import { AuthCodeUncheckedCreateWithoutClientInputObjectSchema as AuthCodeUncheckedCreateWithoutClientInputObjectSchema } from './AuthCodeUncheckedCreateWithoutClientInput.schema';
import { AuthCodeCreateOrConnectWithoutClientInputObjectSchema as AuthCodeCreateOrConnectWithoutClientInputObjectSchema } from './AuthCodeCreateOrConnectWithoutClientInput.schema';
import { AuthCodeUpsertWithWhereUniqueWithoutClientInputObjectSchema as AuthCodeUpsertWithWhereUniqueWithoutClientInputObjectSchema } from './AuthCodeUpsertWithWhereUniqueWithoutClientInput.schema';
import { AuthCodeCreateManyClientInputEnvelopeObjectSchema as AuthCodeCreateManyClientInputEnvelopeObjectSchema } from './AuthCodeCreateManyClientInputEnvelope.schema';
import { AuthCodeWhereUniqueInputObjectSchema as AuthCodeWhereUniqueInputObjectSchema } from './AuthCodeWhereUniqueInput.schema';
import { AuthCodeUpdateWithWhereUniqueWithoutClientInputObjectSchema as AuthCodeUpdateWithWhereUniqueWithoutClientInputObjectSchema } from './AuthCodeUpdateWithWhereUniqueWithoutClientInput.schema';
import { AuthCodeUpdateManyWithWhereWithoutClientInputObjectSchema as AuthCodeUpdateManyWithWhereWithoutClientInputObjectSchema } from './AuthCodeUpdateManyWithWhereWithoutClientInput.schema';
import { AuthCodeScalarWhereInputObjectSchema as AuthCodeScalarWhereInputObjectSchema } from './AuthCodeScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AuthCodeCreateWithoutClientInputObjectSchema), z.lazy(() => AuthCodeCreateWithoutClientInputObjectSchema).array(), z.lazy(() => AuthCodeUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => AuthCodeUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AuthCodeCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => AuthCodeCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AuthCodeUpsertWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => AuthCodeUpsertWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AuthCodeCreateManyClientInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AuthCodeWhereUniqueInputObjectSchema), z.lazy(() => AuthCodeWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AuthCodeWhereUniqueInputObjectSchema), z.lazy(() => AuthCodeWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AuthCodeWhereUniqueInputObjectSchema), z.lazy(() => AuthCodeWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AuthCodeWhereUniqueInputObjectSchema), z.lazy(() => AuthCodeWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AuthCodeUpdateWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => AuthCodeUpdateWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AuthCodeUpdateManyWithWhereWithoutClientInputObjectSchema), z.lazy(() => AuthCodeUpdateManyWithWhereWithoutClientInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AuthCodeScalarWhereInputObjectSchema), z.lazy(() => AuthCodeScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AuthCodeUpdateManyWithoutClientNestedInputObjectSchema: z.ZodType<Prisma.AuthCodeUpdateManyWithoutClientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeUpdateManyWithoutClientNestedInput>;
export const AuthCodeUpdateManyWithoutClientNestedInputObjectZodSchema = makeSchema();
