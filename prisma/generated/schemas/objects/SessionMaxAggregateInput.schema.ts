import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  token: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  clientId: z.literal(true).optional(),
  revoked: z.literal(true).optional()
}).strict();
export const SessionMaxAggregateInputObjectSchema: z.ZodType<Prisma.SessionMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SessionMaxAggregateInputType>;
export const SessionMaxAggregateInputObjectZodSchema = makeSchema();
