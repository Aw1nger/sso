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
export const KeyPairCreateManyInputObjectSchema: z.ZodType<Prisma.KeyPairCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.KeyPairCreateManyInput>;
export const KeyPairCreateManyInputObjectZodSchema = makeSchema();
