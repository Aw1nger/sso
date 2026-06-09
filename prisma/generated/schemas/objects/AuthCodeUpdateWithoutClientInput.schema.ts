import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutAuthCodesNestedInputObjectSchema as UserUpdateOneRequiredWithoutAuthCodesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutAuthCodesNestedInput.schema'

const makeSchema = () => z.object({
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAuthCodesNestedInputObjectSchema).optional()
}).strict();
export const AuthCodeUpdateWithoutClientInputObjectSchema: z.ZodType<Prisma.AuthCodeUpdateWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeUpdateWithoutClientInput>;
export const AuthCodeUpdateWithoutClientInputObjectZodSchema = makeSchema();
