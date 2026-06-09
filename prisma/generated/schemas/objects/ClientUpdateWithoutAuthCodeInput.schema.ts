import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ClientUpdateredirectUriInputObjectSchema as ClientUpdateredirectUriInputObjectSchema } from './ClientUpdateredirectUriInput.schema';
import { SessionUpdateManyWithoutClientNestedInputObjectSchema as SessionUpdateManyWithoutClientNestedInputObjectSchema } from './SessionUpdateManyWithoutClientNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  secret: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  redirectUri: z.union([z.lazy(() => ClientUpdateredirectUriInputObjectSchema), z.string().array()]).optional(),
  Session: z.lazy(() => SessionUpdateManyWithoutClientNestedInputObjectSchema).optional()
}).strict();
export const ClientUpdateWithoutAuthCodeInputObjectSchema: z.ZodType<Prisma.ClientUpdateWithoutAuthCodeInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateWithoutAuthCodeInput>;
export const ClientUpdateWithoutAuthCodeInputObjectZodSchema = makeSchema();
