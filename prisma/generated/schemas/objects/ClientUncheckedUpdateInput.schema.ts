import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ClientUpdateredirectUriInputObjectSchema as ClientUpdateredirectUriInputObjectSchema } from './ClientUpdateredirectUriInput.schema';
import { AuthCodeUncheckedUpdateManyWithoutClientNestedInputObjectSchema as AuthCodeUncheckedUpdateManyWithoutClientNestedInputObjectSchema } from './AuthCodeUncheckedUpdateManyWithoutClientNestedInput.schema';
import { SessionUncheckedUpdateManyWithoutClientNestedInputObjectSchema as SessionUncheckedUpdateManyWithoutClientNestedInputObjectSchema } from './SessionUncheckedUpdateManyWithoutClientNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  secret: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  redirectUri: z.union([z.lazy(() => ClientUpdateredirectUriInputObjectSchema), z.string().array()]).optional(),
  AuthCode: z.lazy(() => AuthCodeUncheckedUpdateManyWithoutClientNestedInputObjectSchema).optional(),
  Session: z.lazy(() => SessionUncheckedUpdateManyWithoutClientNestedInputObjectSchema).optional()
}).strict();
export const ClientUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ClientUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUncheckedUpdateInput>;
export const ClientUncheckedUpdateInputObjectZodSchema = makeSchema();
