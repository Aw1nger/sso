import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientCreateWithoutSessionInputObjectSchema as ClientCreateWithoutSessionInputObjectSchema } from './ClientCreateWithoutSessionInput.schema';
import { ClientUncheckedCreateWithoutSessionInputObjectSchema as ClientUncheckedCreateWithoutSessionInputObjectSchema } from './ClientUncheckedCreateWithoutSessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientCreateWithoutSessionInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutSessionInputObjectSchema)])
}).strict();
export const ClientCreateOrConnectWithoutSessionInputObjectSchema: z.ZodType<Prisma.ClientCreateOrConnectWithoutSessionInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateOrConnectWithoutSessionInput>;
export const ClientCreateOrConnectWithoutSessionInputObjectZodSchema = makeSchema();
