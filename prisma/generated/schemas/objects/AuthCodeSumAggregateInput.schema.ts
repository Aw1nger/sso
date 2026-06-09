import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  clientId: z.literal(true).optional()
}).strict();
export const AuthCodeSumAggregateInputObjectSchema: z.ZodType<Prisma.AuthCodeSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeSumAggregateInputType>;
export const AuthCodeSumAggregateInputObjectZodSchema = makeSchema();
