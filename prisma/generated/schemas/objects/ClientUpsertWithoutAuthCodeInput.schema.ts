import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ClientUpdateWithoutAuthCodeInputObjectSchema as ClientUpdateWithoutAuthCodeInputObjectSchema } from './ClientUpdateWithoutAuthCodeInput.schema';
import { ClientUncheckedUpdateWithoutAuthCodeInputObjectSchema as ClientUncheckedUpdateWithoutAuthCodeInputObjectSchema } from './ClientUncheckedUpdateWithoutAuthCodeInput.schema';
import { ClientCreateWithoutAuthCodeInputObjectSchema as ClientCreateWithoutAuthCodeInputObjectSchema } from './ClientCreateWithoutAuthCodeInput.schema';
import { ClientUncheckedCreateWithoutAuthCodeInputObjectSchema as ClientUncheckedCreateWithoutAuthCodeInputObjectSchema } from './ClientUncheckedCreateWithoutAuthCodeInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ClientUpdateWithoutAuthCodeInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutAuthCodeInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientCreateWithoutAuthCodeInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutAuthCodeInputObjectSchema)]),
  where: z.lazy(() => ClientWhereInputObjectSchema).optional()
}).strict();
export const ClientUpsertWithoutAuthCodeInputObjectSchema: z.ZodType<Prisma.ClientUpsertWithoutAuthCodeInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpsertWithoutAuthCodeInput>;
export const ClientUpsertWithoutAuthCodeInputObjectZodSchema = makeSchema();
