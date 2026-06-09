import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const FirstRegisterSumAggregateInputObjectSchema: z.ZodType<Prisma.FirstRegisterSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FirstRegisterSumAggregateInputType>;
export const FirstRegisterSumAggregateInputObjectZodSchema = makeSchema();
