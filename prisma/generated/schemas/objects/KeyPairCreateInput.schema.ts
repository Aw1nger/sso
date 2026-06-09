import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { KeyPairStatusSchema } from '../enums/KeyPairStatus.schema'

const makeSchema = () => z.object({
  publicKey: z.string(),
  privateKey: z.string(),
  createdAt: z.coerce.date().optional(),
  alghoritm: z.string().optional(),
  status: KeyPairStatusSchema.optional()
}).strict();
export const KeyPairCreateInputObjectSchema: z.ZodType<Prisma.KeyPairCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.KeyPairCreateInput>;
export const KeyPairCreateInputObjectZodSchema = makeSchema();
