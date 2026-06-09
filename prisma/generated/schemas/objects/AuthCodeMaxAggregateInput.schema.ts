import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  code: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  clientId: z.literal(true).optional()
}).strict();
export const AuthCodeMaxAggregateInputObjectSchema: z.ZodType<Prisma.AuthCodeMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeMaxAggregateInputType>;
export const AuthCodeMaxAggregateInputObjectZodSchema = makeSchema();
