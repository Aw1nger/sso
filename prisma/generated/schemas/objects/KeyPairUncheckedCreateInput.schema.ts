import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { KeyPairStatusSchema } from '../enums/KeyPairStatus.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  publicKey: z.string(),
  privateKey: z.string(),
  createdAt: z.coerce.date().optional(),
  alghoritm: z.string().optional(),
  status: KeyPairStatusSchema.optional()
}).strict();
export const KeyPairUncheckedCreateInputObjectSchema: z.ZodType<Prisma.KeyPairUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.KeyPairUncheckedCreateInput>;
export const KeyPairUncheckedCreateInputObjectZodSchema = makeSchema();
