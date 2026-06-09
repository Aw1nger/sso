import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ClientUpdateOneRequiredWithoutAuthCodeNestedInputObjectSchema as ClientUpdateOneRequiredWithoutAuthCodeNestedInputObjectSchema } from './ClientUpdateOneRequiredWithoutAuthCodeNestedInput.schema'

const makeSchema = () => z.object({
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  client: z.lazy(() => ClientUpdateOneRequiredWithoutAuthCodeNestedInputObjectSchema).optional()
}).strict();
export const AuthCodeUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.AuthCodeUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeUpdateWithoutUserInput>;
export const AuthCodeUpdateWithoutUserInputObjectZodSchema = makeSchema();
