import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ClientUpdateWithoutSessionInputObjectSchema as ClientUpdateWithoutSessionInputObjectSchema } from './ClientUpdateWithoutSessionInput.schema';
import { ClientUncheckedUpdateWithoutSessionInputObjectSchema as ClientUncheckedUpdateWithoutSessionInputObjectSchema } from './ClientUncheckedUpdateWithoutSessionInput.schema';
import { ClientCreateWithoutSessionInputObjectSchema as ClientCreateWithoutSessionInputObjectSchema } from './ClientCreateWithoutSessionInput.schema';
import { ClientUncheckedCreateWithoutSessionInputObjectSchema as ClientUncheckedCreateWithoutSessionInputObjectSchema } from './ClientUncheckedCreateWithoutSessionInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ClientUpdateWithoutSessionInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutSessionInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientCreateWithoutSessionInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutSessionInputObjectSchema)]),
  where: z.lazy(() => ClientWhereInputObjectSchema).optional()
}).strict();
export const ClientUpsertWithoutSessionInputObjectSchema: z.ZodType<Prisma.ClientUpsertWithoutSessionInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpsertWithoutSessionInput>;
export const ClientUpsertWithoutSessionInputObjectZodSchema = makeSchema();
