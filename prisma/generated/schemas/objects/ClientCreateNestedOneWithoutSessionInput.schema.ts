import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ClientCreateWithoutSessionInputObjectSchema as ClientCreateWithoutSessionInputObjectSchema } from './ClientCreateWithoutSessionInput.schema';
import { ClientUncheckedCreateWithoutSessionInputObjectSchema as ClientUncheckedCreateWithoutSessionInputObjectSchema } from './ClientUncheckedCreateWithoutSessionInput.schema';
import { ClientCreateOrConnectWithoutSessionInputObjectSchema as ClientCreateOrConnectWithoutSessionInputObjectSchema } from './ClientCreateOrConnectWithoutSessionInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutSessionInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutSessionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutSessionInputObjectSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional()
}).strict();
export const ClientCreateNestedOneWithoutSessionInputObjectSchema: z.ZodType<Prisma.ClientCreateNestedOneWithoutSessionInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateNestedOneWithoutSessionInput>;
export const ClientCreateNestedOneWithoutSessionInputObjectZodSchema = makeSchema();
