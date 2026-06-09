import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ClientUpdateredirectUriInputObjectSchema as ClientUpdateredirectUriInputObjectSchema } from './ClientUpdateredirectUriInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  secret: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  redirectUri: z.union([z.lazy(() => ClientUpdateredirectUriInputObjectSchema), z.string().array()]).optional()
}).strict();
export const ClientUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.ClientUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateManyMutationInput>;
export const ClientUpdateManyMutationInputObjectZodSchema = makeSchema();
