import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuthCodeCreateWithoutUserInputObjectSchema as AuthCodeCreateWithoutUserInputObjectSchema } from './AuthCodeCreateWithoutUserInput.schema';
import { AuthCodeUncheckedCreateWithoutUserInputObjectSchema as AuthCodeUncheckedCreateWithoutUserInputObjectSchema } from './AuthCodeUncheckedCreateWithoutUserInput.schema';
import { AuthCodeCreateOrConnectWithoutUserInputObjectSchema as AuthCodeCreateOrConnectWithoutUserInputObjectSchema } from './AuthCodeCreateOrConnectWithoutUserInput.schema';
import { AuthCodeCreateManyUserInputEnvelopeObjectSchema as AuthCodeCreateManyUserInputEnvelopeObjectSchema } from './AuthCodeCreateManyUserInputEnvelope.schema';
import { AuthCodeWhereUniqueInputObjectSchema as AuthCodeWhereUniqueInputObjectSchema } from './AuthCodeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AuthCodeCreateWithoutUserInputObjectSchema), z.lazy(() => AuthCodeCreateWithoutUserInputObjectSchema).array(), z.lazy(() => AuthCodeUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => AuthCodeUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AuthCodeCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => AuthCodeCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AuthCodeCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AuthCodeWhereUniqueInputObjectSchema), z.lazy(() => AuthCodeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AuthCodeCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.AuthCodeCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeCreateNestedManyWithoutUserInput>;
export const AuthCodeCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
