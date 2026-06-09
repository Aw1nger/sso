import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuthCodeCreateWithoutClientInputObjectSchema as AuthCodeCreateWithoutClientInputObjectSchema } from './AuthCodeCreateWithoutClientInput.schema';
import { AuthCodeUncheckedCreateWithoutClientInputObjectSchema as AuthCodeUncheckedCreateWithoutClientInputObjectSchema } from './AuthCodeUncheckedCreateWithoutClientInput.schema';
import { AuthCodeCreateOrConnectWithoutClientInputObjectSchema as AuthCodeCreateOrConnectWithoutClientInputObjectSchema } from './AuthCodeCreateOrConnectWithoutClientInput.schema';
import { AuthCodeCreateManyClientInputEnvelopeObjectSchema as AuthCodeCreateManyClientInputEnvelopeObjectSchema } from './AuthCodeCreateManyClientInputEnvelope.schema';
import { AuthCodeWhereUniqueInputObjectSchema as AuthCodeWhereUniqueInputObjectSchema } from './AuthCodeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AuthCodeCreateWithoutClientInputObjectSchema), z.lazy(() => AuthCodeCreateWithoutClientInputObjectSchema).array(), z.lazy(() => AuthCodeUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => AuthCodeUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AuthCodeCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => AuthCodeCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AuthCodeCreateManyClientInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AuthCodeWhereUniqueInputObjectSchema), z.lazy(() => AuthCodeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AuthCodeCreateNestedManyWithoutClientInputObjectSchema: z.ZodType<Prisma.AuthCodeCreateNestedManyWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeCreateNestedManyWithoutClientInput>;
export const AuthCodeCreateNestedManyWithoutClientInputObjectZodSchema = makeSchema();
