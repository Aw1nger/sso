import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { KeyPairStatusSchema } from '../enums/KeyPairStatus.schema';
import { EnumKeyPairStatusFieldUpdateOperationsInputObjectSchema as EnumKeyPairStatusFieldUpdateOperationsInputObjectSchema } from './EnumKeyPairStatusFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  publicKey: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  privateKey: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  alghoritm: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([KeyPairStatusSchema, z.lazy(() => EnumKeyPairStatusFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const KeyPairUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.KeyPairUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.KeyPairUpdateManyMutationInput>;
export const KeyPairUpdateManyMutationInputObjectZodSchema = makeSchema();
