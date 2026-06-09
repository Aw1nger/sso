import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { ClientUpdateOneRequiredWithoutSessionNestedInputObjectSchema as ClientUpdateOneRequiredWithoutSessionNestedInputObjectSchema } from './ClientUpdateOneRequiredWithoutSessionNestedInput.schema'

const makeSchema = () => z.object({
  token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  revoked: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  client: z.lazy(() => ClientUpdateOneRequiredWithoutSessionNestedInputObjectSchema).optional()
}).strict();
export const SessionUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUpdateWithoutUserInput>;
export const SessionUpdateWithoutUserInputObjectZodSchema = makeSchema();
