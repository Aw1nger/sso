import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const FirstRegisterAvgAggregateInputObjectSchema: z.ZodType<Prisma.FirstRegisterAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FirstRegisterAvgAggregateInputType>;
export const FirstRegisterAvgAggregateInputObjectZodSchema = makeSchema();
