import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const KeyPairWhereUniqueInputObjectSchema: z.ZodType<Prisma.KeyPairWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.KeyPairWhereUniqueInput>;
export const KeyPairWhereUniqueInputObjectZodSchema = makeSchema();
