import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const FirstRegisterWhereUniqueInputObjectSchema: z.ZodType<Prisma.FirstRegisterWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.FirstRegisterWhereUniqueInput>;
export const FirstRegisterWhereUniqueInputObjectZodSchema = makeSchema();
