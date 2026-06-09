import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  publicKey: z.boolean().optional(),
  privateKey: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  alghoritm: z.boolean().optional(),
  status: z.boolean().optional()
}).strict();
export const KeyPairSelectObjectSchema: z.ZodType<Prisma.KeyPairSelect> = makeSchema() as unknown as z.ZodType<Prisma.KeyPairSelect>;
export const KeyPairSelectObjectZodSchema = makeSchema();
