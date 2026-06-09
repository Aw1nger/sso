import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ClientUpdateredirectUriInputObjectSchema as ClientUpdateredirectUriInputObjectSchema } from './ClientUpdateredirectUriInput.schema';
import { AuthCodeUpdateManyWithoutClientNestedInputObjectSchema as AuthCodeUpdateManyWithoutClientNestedInputObjectSchema } from './AuthCodeUpdateManyWithoutClientNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  secret: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  redirectUri: z.union([z.lazy(() => ClientUpdateredirectUriInputObjectSchema), z.string().array()]).optional(),
  AuthCode: z.lazy(() => AuthCodeUpdateManyWithoutClientNestedInputObjectSchema).optional()
}).strict();
export const ClientUpdateWithoutSessionInputObjectSchema: z.ZodType<Prisma.ClientUpdateWithoutSessionInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateWithoutSessionInput>;
export const ClientUpdateWithoutSessionInputObjectZodSchema = makeSchema();
