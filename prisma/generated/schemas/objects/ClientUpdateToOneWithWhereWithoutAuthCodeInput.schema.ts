import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientUpdateWithoutAuthCodeInputObjectSchema as ClientUpdateWithoutAuthCodeInputObjectSchema } from './ClientUpdateWithoutAuthCodeInput.schema';
import { ClientUncheckedUpdateWithoutAuthCodeInputObjectSchema as ClientUncheckedUpdateWithoutAuthCodeInputObjectSchema } from './ClientUncheckedUpdateWithoutAuthCodeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ClientUpdateWithoutAuthCodeInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutAuthCodeInputObjectSchema)])
}).strict();
export const ClientUpdateToOneWithWhereWithoutAuthCodeInputObjectSchema: z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutAuthCodeInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutAuthCodeInput>;
export const ClientUpdateToOneWithWhereWithoutAuthCodeInputObjectZodSchema = makeSchema();
