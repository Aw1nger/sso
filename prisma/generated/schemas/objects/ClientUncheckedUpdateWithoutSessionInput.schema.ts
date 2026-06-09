import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ClientUpdateredirectUriInputObjectSchema as ClientUpdateredirectUriInputObjectSchema } from './ClientUpdateredirectUriInput.schema';
import { AuthCodeUncheckedUpdateManyWithoutClientNestedInputObjectSchema as AuthCodeUncheckedUpdateManyWithoutClientNestedInputObjectSchema } from './AuthCodeUncheckedUpdateManyWithoutClientNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  secret: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  redirectUri: z.union([z.lazy(() => ClientUpdateredirectUriInputObjectSchema), z.string().array()]).optional(),
  AuthCode: z.lazy(() => AuthCodeUncheckedUpdateManyWithoutClientNestedInputObjectSchema).optional()
}).strict();
export const ClientUncheckedUpdateWithoutSessionInputObjectSchema: z.ZodType<Prisma.ClientUncheckedUpdateWithoutSessionInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUncheckedUpdateWithoutSessionInput>;
export const ClientUncheckedUpdateWithoutSessionInputObjectZodSchema = makeSchema();
