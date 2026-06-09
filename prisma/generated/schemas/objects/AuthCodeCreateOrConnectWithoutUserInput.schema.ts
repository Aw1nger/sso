import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuthCodeWhereUniqueInputObjectSchema as AuthCodeWhereUniqueInputObjectSchema } from './AuthCodeWhereUniqueInput.schema';
import { AuthCodeCreateWithoutUserInputObjectSchema as AuthCodeCreateWithoutUserInputObjectSchema } from './AuthCodeCreateWithoutUserInput.schema';
import { AuthCodeUncheckedCreateWithoutUserInputObjectSchema as AuthCodeUncheckedCreateWithoutUserInputObjectSchema } from './AuthCodeUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AuthCodeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AuthCodeCreateWithoutUserInputObjectSchema), z.lazy(() => AuthCodeUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const AuthCodeCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.AuthCodeCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeCreateOrConnectWithoutUserInput>;
export const AuthCodeCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
