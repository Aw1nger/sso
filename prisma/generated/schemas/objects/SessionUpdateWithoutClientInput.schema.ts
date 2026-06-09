import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutSessionNestedInputObjectSchema as UserUpdateOneRequiredWithoutSessionNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutSessionNestedInput.schema'

const makeSchema = () => z.object({
  token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  revoked: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutSessionNestedInputObjectSchema).optional()
}).strict();
export const SessionUpdateWithoutClientInputObjectSchema: z.ZodType<Prisma.SessionUpdateWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUpdateWithoutClientInput>;
export const SessionUpdateWithoutClientInputObjectZodSchema = makeSchema();
