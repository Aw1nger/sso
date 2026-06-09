import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuthCodeWhereUniqueInputObjectSchema as AuthCodeWhereUniqueInputObjectSchema } from './AuthCodeWhereUniqueInput.schema';
import { AuthCodeCreateWithoutClientInputObjectSchema as AuthCodeCreateWithoutClientInputObjectSchema } from './AuthCodeCreateWithoutClientInput.schema';
import { AuthCodeUncheckedCreateWithoutClientInputObjectSchema as AuthCodeUncheckedCreateWithoutClientInputObjectSchema } from './AuthCodeUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AuthCodeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AuthCodeCreateWithoutClientInputObjectSchema), z.lazy(() => AuthCodeUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const AuthCodeCreateOrConnectWithoutClientInputObjectSchema: z.ZodType<Prisma.AuthCodeCreateOrConnectWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeCreateOrConnectWithoutClientInput>;
export const AuthCodeCreateOrConnectWithoutClientInputObjectZodSchema = makeSchema();
