import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ClientCreateWithoutAuthCodeInputObjectSchema as ClientCreateWithoutAuthCodeInputObjectSchema } from './ClientCreateWithoutAuthCodeInput.schema';
import { ClientUncheckedCreateWithoutAuthCodeInputObjectSchema as ClientUncheckedCreateWithoutAuthCodeInputObjectSchema } from './ClientUncheckedCreateWithoutAuthCodeInput.schema';
import { ClientCreateOrConnectWithoutAuthCodeInputObjectSchema as ClientCreateOrConnectWithoutAuthCodeInputObjectSchema } from './ClientCreateOrConnectWithoutAuthCodeInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutAuthCodeInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutAuthCodeInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutAuthCodeInputObjectSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional()
}).strict();
export const ClientCreateNestedOneWithoutAuthCodeInputObjectSchema: z.ZodType<Prisma.ClientCreateNestedOneWithoutAuthCodeInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateNestedOneWithoutAuthCodeInput>;
export const ClientCreateNestedOneWithoutAuthCodeInputObjectZodSchema = makeSchema();
