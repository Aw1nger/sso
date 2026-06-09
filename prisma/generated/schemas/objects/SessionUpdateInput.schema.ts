import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutSessionNestedInputObjectSchema as UserUpdateOneRequiredWithoutSessionNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutSessionNestedInput.schema';
import { ClientUpdateOneRequiredWithoutSessionNestedInputObjectSchema as ClientUpdateOneRequiredWithoutSessionNestedInputObjectSchema } from './ClientUpdateOneRequiredWithoutSessionNestedInput.schema'

const makeSchema = () => z.object({
  token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  revoked: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutSessionNestedInputObjectSchema).optional(),
  client: z.lazy(() => ClientUpdateOneRequiredWithoutSessionNestedInputObjectSchema).optional()
}).strict();
export const SessionUpdateInputObjectSchema: z.ZodType<Prisma.SessionUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUpdateInput>;
export const SessionUpdateInputObjectZodSchema = makeSchema();
