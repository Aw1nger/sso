import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuthCodeCreateWithoutUserInputObjectSchema as AuthCodeCreateWithoutUserInputObjectSchema } from './AuthCodeCreateWithoutUserInput.schema';
import { AuthCodeUncheckedCreateWithoutUserInputObjectSchema as AuthCodeUncheckedCreateWithoutUserInputObjectSchema } from './AuthCodeUncheckedCreateWithoutUserInput.schema';
import { AuthCodeCreateOrConnectWithoutUserInputObjectSchema as AuthCodeCreateOrConnectWithoutUserInputObjectSchema } from './AuthCodeCreateOrConnectWithoutUserInput.schema';
import { AuthCodeUpsertWithWhereUniqueWithoutUserInputObjectSchema as AuthCodeUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './AuthCodeUpsertWithWhereUniqueWithoutUserInput.schema';
import { AuthCodeCreateManyUserInputEnvelopeObjectSchema as AuthCodeCreateManyUserInputEnvelopeObjectSchema } from './AuthCodeCreateManyUserInputEnvelope.schema';
import { AuthCodeWhereUniqueInputObjectSchema as AuthCodeWhereUniqueInputObjectSchema } from './AuthCodeWhereUniqueInput.schema';
import { AuthCodeUpdateWithWhereUniqueWithoutUserInputObjectSchema as AuthCodeUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './AuthCodeUpdateWithWhereUniqueWithoutUserInput.schema';
import { AuthCodeUpdateManyWithWhereWithoutUserInputObjectSchema as AuthCodeUpdateManyWithWhereWithoutUserInputObjectSchema } from './AuthCodeUpdateManyWithWhereWithoutUserInput.schema';
import { AuthCodeScalarWhereInputObjectSchema as AuthCodeScalarWhereInputObjectSchema } from './AuthCodeScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AuthCodeCreateWithoutUserInputObjectSchema), z.lazy(() => AuthCodeCreateWithoutUserInputObjectSchema).array(), z.lazy(() => AuthCodeUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => AuthCodeUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AuthCodeCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => AuthCodeCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AuthCodeUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => AuthCodeUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AuthCodeCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AuthCodeWhereUniqueInputObjectSchema), z.lazy(() => AuthCodeWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AuthCodeWhereUniqueInputObjectSchema), z.lazy(() => AuthCodeWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AuthCodeWhereUniqueInputObjectSchema), z.lazy(() => AuthCodeWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AuthCodeWhereUniqueInputObjectSchema), z.lazy(() => AuthCodeWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AuthCodeUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => AuthCodeUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AuthCodeUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => AuthCodeUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AuthCodeScalarWhereInputObjectSchema), z.lazy(() => AuthCodeScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AuthCodeUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.AuthCodeUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeUncheckedUpdateManyWithoutUserNestedInput>;
export const AuthCodeUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
