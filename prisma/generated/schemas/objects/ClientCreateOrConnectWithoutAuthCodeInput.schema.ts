import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientCreateWithoutAuthCodeInputObjectSchema as ClientCreateWithoutAuthCodeInputObjectSchema } from './ClientCreateWithoutAuthCodeInput.schema';
import { ClientUncheckedCreateWithoutAuthCodeInputObjectSchema as ClientUncheckedCreateWithoutAuthCodeInputObjectSchema } from './ClientUncheckedCreateWithoutAuthCodeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientCreateWithoutAuthCodeInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutAuthCodeInputObjectSchema)])
}).strict();
export const ClientCreateOrConnectWithoutAuthCodeInputObjectSchema: z.ZodType<Prisma.ClientCreateOrConnectWithoutAuthCodeInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateOrConnectWithoutAuthCodeInput>;
export const ClientCreateOrConnectWithoutAuthCodeInputObjectZodSchema = makeSchema();
