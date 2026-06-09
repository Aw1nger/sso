import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientUpdateWithoutSessionInputObjectSchema as ClientUpdateWithoutSessionInputObjectSchema } from './ClientUpdateWithoutSessionInput.schema';
import { ClientUncheckedUpdateWithoutSessionInputObjectSchema as ClientUncheckedUpdateWithoutSessionInputObjectSchema } from './ClientUncheckedUpdateWithoutSessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ClientUpdateWithoutSessionInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutSessionInputObjectSchema)])
}).strict();
export const ClientUpdateToOneWithWhereWithoutSessionInputObjectSchema: z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutSessionInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutSessionInput>;
export const ClientUpdateToOneWithWhereWithoutSessionInputObjectZodSchema = makeSchema();
