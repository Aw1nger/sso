import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { KeyPairStatusSchema } from '../enums/KeyPairStatus.schema'

const makeSchema = () => z.object({
  set: KeyPairStatusSchema.optional()
}).strict();
export const EnumKeyPairStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumKeyPairStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumKeyPairStatusFieldUpdateOperationsInput>;
export const EnumKeyPairStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
