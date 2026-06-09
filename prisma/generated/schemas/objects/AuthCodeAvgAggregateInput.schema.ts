import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  clientId: z.literal(true).optional()
}).strict();
export const AuthCodeAvgAggregateInputObjectSchema: z.ZodType<Prisma.AuthCodeAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeAvgAggregateInputType>;
export const AuthCodeAvgAggregateInputObjectZodSchema = makeSchema();
