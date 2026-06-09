import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ClientCreateWithoutAuthCodeInputObjectSchema as ClientCreateWithoutAuthCodeInputObjectSchema } from './ClientCreateWithoutAuthCodeInput.schema';
import { ClientUncheckedCreateWithoutAuthCodeInputObjectSchema as ClientUncheckedCreateWithoutAuthCodeInputObjectSchema } from './ClientUncheckedCreateWithoutAuthCodeInput.schema';
import { ClientCreateOrConnectWithoutAuthCodeInputObjectSchema as ClientCreateOrConnectWithoutAuthCodeInputObjectSchema } from './ClientCreateOrConnectWithoutAuthCodeInput.schema';
import { ClientUpsertWithoutAuthCodeInputObjectSchema as ClientUpsertWithoutAuthCodeInputObjectSchema } from './ClientUpsertWithoutAuthCodeInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientUpdateToOneWithWhereWithoutAuthCodeInputObjectSchema as ClientUpdateToOneWithWhereWithoutAuthCodeInputObjectSchema } from './ClientUpdateToOneWithWhereWithoutAuthCodeInput.schema';
import { ClientUpdateWithoutAuthCodeInputObjectSchema as ClientUpdateWithoutAuthCodeInputObjectSchema } from './ClientUpdateWithoutAuthCodeInput.schema';
import { ClientUncheckedUpdateWithoutAuthCodeInputObjectSchema as ClientUncheckedUpdateWithoutAuthCodeInputObjectSchema } from './ClientUncheckedUpdateWithoutAuthCodeInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutAuthCodeInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutAuthCodeInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutAuthCodeInputObjectSchema).optional(),
  upsert: z.lazy(() => ClientUpsertWithoutAuthCodeInputObjectSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ClientUpdateToOneWithWhereWithoutAuthCodeInputObjectSchema), z.lazy(() => ClientUpdateWithoutAuthCodeInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutAuthCodeInputObjectSchema)]).optional()
}).strict();
export const ClientUpdateOneRequiredWithoutAuthCodeNestedInputObjectSchema: z.ZodType<Prisma.ClientUpdateOneRequiredWithoutAuthCodeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateOneRequiredWithoutAuthCodeNestedInput>;
export const ClientUpdateOneRequiredWithoutAuthCodeNestedInputObjectZodSchema = makeSchema();
