import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  email: z.literal(true).optional(),
  username: z.literal(true).optional(),
  code: z.literal(true).optional(),
  expiresAt: z.literal(true).optional()
}).strict();
export const FirstRegisterMinAggregateInputObjectSchema: z.ZodType<Prisma.FirstRegisterMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FirstRegisterMinAggregateInputType>;
export const FirstRegisterMinAggregateInputObjectZodSchema = makeSchema();
