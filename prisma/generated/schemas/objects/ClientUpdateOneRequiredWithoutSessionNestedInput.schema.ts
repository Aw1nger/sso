import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ClientCreateWithoutSessionInputObjectSchema as ClientCreateWithoutSessionInputObjectSchema } from './ClientCreateWithoutSessionInput.schema';
import { ClientUncheckedCreateWithoutSessionInputObjectSchema as ClientUncheckedCreateWithoutSessionInputObjectSchema } from './ClientUncheckedCreateWithoutSessionInput.schema';
import { ClientCreateOrConnectWithoutSessionInputObjectSchema as ClientCreateOrConnectWithoutSessionInputObjectSchema } from './ClientCreateOrConnectWithoutSessionInput.schema';
import { ClientUpsertWithoutSessionInputObjectSchema as ClientUpsertWithoutSessionInputObjectSchema } from './ClientUpsertWithoutSessionInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientUpdateToOneWithWhereWithoutSessionInputObjectSchema as ClientUpdateToOneWithWhereWithoutSessionInputObjectSchema } from './ClientUpdateToOneWithWhereWithoutSessionInput.schema';
import { ClientUpdateWithoutSessionInputObjectSchema as ClientUpdateWithoutSessionInputObjectSchema } from './ClientUpdateWithoutSessionInput.schema';
import { ClientUncheckedUpdateWithoutSessionInputObjectSchema as ClientUncheckedUpdateWithoutSessionInputObjectSchema } from './ClientUncheckedUpdateWithoutSessionInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutSessionInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutSessionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutSessionInputObjectSchema).optional(),
  upsert: z.lazy(() => ClientUpsertWithoutSessionInputObjectSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ClientUpdateToOneWithWhereWithoutSessionInputObjectSchema), z.lazy(() => ClientUpdateWithoutSessionInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutSessionInputObjectSchema)]).optional()
}).strict();
export const ClientUpdateOneRequiredWithoutSessionNestedInputObjectSchema: z.ZodType<Prisma.ClientUpdateOneRequiredWithoutSessionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateOneRequiredWithoutSessionNestedInput>;
export const ClientUpdateOneRequiredWithoutSessionNestedInputObjectZodSchema = makeSchema();
