import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ClientUpdateredirectUriInputObjectSchema as ClientUpdateredirectUriInputObjectSchema } from './ClientUpdateredirectUriInput.schema';
import { SessionUncheckedUpdateManyWithoutClientNestedInputObjectSchema as SessionUncheckedUpdateManyWithoutClientNestedInputObjectSchema } from './SessionUncheckedUpdateManyWithoutClientNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  secret: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  redirectUri: z.union([z.lazy(() => ClientUpdateredirectUriInputObjectSchema), z.string().array()]).optional(),
  Session: z.lazy(() => SessionUncheckedUpdateManyWithoutClientNestedInputObjectSchema).optional()
}).strict();
export const ClientUncheckedUpdateWithoutAuthCodeInputObjectSchema: z.ZodType<Prisma.ClientUncheckedUpdateWithoutAuthCodeInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUncheckedUpdateWithoutAuthCodeInput>;
export const ClientUncheckedUpdateWithoutAuthCodeInputObjectZodSchema = makeSchema();
