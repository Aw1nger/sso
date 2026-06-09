import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { KeyPairStatusSchema } from '../enums/KeyPairStatus.schema';
import { EnumKeyPairStatusFieldUpdateOperationsInputObjectSchema as EnumKeyPairStatusFieldUpdateOperationsInputObjectSchema } from './EnumKeyPairStatusFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  publicKey: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  privateKey: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  alghoritm: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([KeyPairStatusSchema, z.lazy(() => EnumKeyPairStatusFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const KeyPairUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.KeyPairUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.KeyPairUncheckedUpdateManyInput>;
export const KeyPairUncheckedUpdateManyInputObjectZodSchema = makeSchema();
